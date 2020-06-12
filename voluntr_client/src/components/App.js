import React from "react";

import { OpportunitiesPage } from "./OpportunitiesPage";
import OpportunityPage from "./OpportunityPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import { User, Session } from "../requests";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import NotFoundPage from "./NotFoundPage";
import Welcome from "./Welcome";
import { CreatePage } from "./CreatePage";
import { SentMessagesPage } from "./SentMessagesPage";
import { WriteMessagesPage } from "./WriteMessagesPage"