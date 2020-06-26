import React, { useState, useEffect } from "react";
import { Opportunities } from "../requests";
import { FormErrors } from "./FormErrors/FormErrors";
import Spinner from "./Spinner";
import NewOpportunityForm from "./NewOpportunityForm";

export const OpportunityEditPage = props => {
  const [errors, setErrors] = useState([]);
  const [opportunities, setOpportunity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateOpportunity = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    const updatedOpportunity = {
      title: fd.get("title"),
      description: fd.get("description"),
      tags: fd.get("tags"),
      date: fd.get("date"),
      time: fd.get("time"),
      where: fd.get("where"),
      contact: fd.get("contact"),
      created_at: fd.get("created_at")
    };

    Opportunities.update(props.match.params.id, updatedOpportunity).then(data => {
      if (data.errors) {
        setErrors(data.errors);
      } else {
        props.history.push(`/opportunities/${data.id}`);
      }
    });
  };

  useEffect(() => {
    Opportunities.one(props.match.params.id).then(opportunities => {
      setOpportunity(opportunities);
      setIsLoading(false);
    });
  }, [props.match.params.id]);

  if (isLoading) {
    return <Spinner message="Opportunity doesn't exist to edit" />;
  }

  return (
    <NewOpportunityForm
      errors={errors}
      onUpdateOpportunity={updateOpportunity}
      buttonMessage="Update Opportunity"
      opportunities={opportunities}
    />
  );
};