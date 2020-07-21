import React from "react";
import logo from "../images/wireframe/logo.svg"


export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="welcome">
          
          {/* <h1>VOLUNTR</h1>  */}
          <div className="img-logo">
          <img src={logo} alt="logo"/>
          </div>

          
        <div className="hero-img">  
          <svg id="a6ee8617-cc99-4eb9-a93b-e1a7e83c9724" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1088" height="826.29361" viewBox="0 0 1088 826.29361"><title>code typing</title><path d="M990.987,366.24078C943.16694,178.20138,777.93353,42.46323,583.98525,37.01889,481.45062,34.14063,373.55556,68.14681,295,187.14681c-140.42655,212.72536,8.62954,359.72511,112.5475,429.57647A650.24048,650.24048,0,0,1,541.94966,737.52349C612.14286,820.819,747.17857,924.32538,908,762.14681,1024.56358,644.59957,1022.83991,491.4936,990.987,366.24078Z" transform="translate(-56 -36.85319)" fill="#f2f2f2"/><polygon points="719.6 507.394 818 409.294 719.6 311.194 749.6 281.294 878 409.294 749.6 537.294 719.6 507.394 719.6 507.394" opacity="0.1"/><path d="M494.6,453.14681h40v-40h-40Zm200.8-40h-40v40h40Zm-120.4,40h40v-40H575Z" transform="translate(-56 -36.85319)" opacity="0.1"/><polygon points="384.4 506.394 285.9 408.294 384.3 310.194 354.3 280.294 226 408.294 354.4 536.294 384.4 506.394" opacity="0.1"/><path d="M1144,789.14681c0,16.56854-243.5571,74-544,74s-544-57.43146-544-74,243.5571,14,544,14S1144,772.57826,1144,789.14681Z" transform="translate(-56 -36.85319)" fill="#3f3d56"/><path d="M1144,789.14681c0,16.56854-243.5571,74-544,74s-544-57.43146-544-74,243.5571,14,544,14S1144,772.57826,1144,789.14681Z" transform="translate(-56 -36.85319)" opacity="0.1"/><ellipse cx="544" cy="752.29361" rx="544" ry="30" fill="#3f3d56"/><path d="M688.696,644.80629c0,64.01613,40.16035,115.81717,89.79084,115.81717" transform="translate(-56 -36.85319)" fill="#3f3d56"/><path d="M778.48684,760.62346c0-64.73541,44.81662-117.11849,100.20136-117.11849" transform="translate(-56 -36.85319)" fill="#6c63ff"/><path d="M721.22891,650.60946c0,60.80852,25.6095,110.014,57.25793,110.014" transform="translate(-56 -36.85319)" fill="#6c63ff"/><path d="M778.48684,760.62346c0-82.71747,51.801-149.6514,115.81716-149.6514" transform="translate(-56 -36.85319)" fill="#3f3d56"/><path d="M759.59716,761.44s12.73382-.39219,16.57147-3.12493,19.58782-5.99578,20.53985-1.61306,19.13656,21.79764,4.76014,21.9136-33.4044-2.23935-37.23467-4.57252S759.59716,761.44,759.59716,761.44Z" transform="translate(-56 -36.85319)" fill="#a8a8a8"/><path d="M801.72518,777.09c-14.37642.116-33.40439-2.23933-37.23466-4.57251-2.91695-1.77683-4.07933-8.15253-4.46825-11.094-.26935.01158-.42511.01657-.42511.01657s.80653,10.26992,4.63681,12.60309,22.85824,4.6885,37.23466,4.57251c4.1499-.03347,5.58335-1.50994,5.50464-3.69673C806.39675,776.24,804.814,777.065,801.72518,777.09Z" transform="translate(-56 -36.85319)" opacity="0.2"/><path d="M921.53291,419.70575s-30.78848-23.37612-33.12545-14.80723,22.59069,28.04361,22.59069,28.04361Z" transform="translate(-56 -36.85319)" fill="#ffb9b9"/><path d="M921.53291,419.70575s-30.78848-23.37612-33.12545-14.80723,22.59069,28.04361,22.59069,28.04361Z" transform="translate(-56 -36.85319)" opacity="0.1"/><path d="M1023.17262,345.69533s-36.6125,65.4351-37.39149,74.783-.779,10.12686-3.89495,9.34787-45.96037-5.45292-49.85532-3.89494-11.68484-9.34787-11.68484-9.34787-14.80079,14.80079-11.68484,17.91675S921.125,439.17405,922.683,443.069s3.89495,7.7899,10.90585,7.01091S988.1181,462.54373,994.35,460.20676s7.78989-6.23192,10.90585-6.23192,9.34787-3.11595,9.34787-3.89494,21.8117-42.06543,21.8117-42.06543S1062.12208,351.92724,1023.17262,345.69533Z" transform="translate(-56 -36.85319)" fill="#d0cde1"/><path d="M1023.17262,345.69533s-36.6125,65.4351-37.39149,74.783-.779,10.12686-3.89495,9.34787-45.96037-5.45292-49.85532-3.89494-11.68484-9.34787-11.68484-9.34787-14.80079,14.80079-11.68484,17.91675S921.125,439.17405,922.683,443.069s3.89495,7.7899,10.90585,7.01091S988.1181,462.54373,994.35,460.20676s7.78989-6.23192,10.90585-6.23192,9.34787-3.11595,9.34787-3.89494,21.8117-42.06543,21.8117-42.06543S1062.12208,351.92724,1023.17262,345.69533Z" transform="translate(-56 -36.85319)" opacity="0.1"/><path d="M970.05372,302.55716a64.78949,64.78949,0,0,0,.19963,12.41994c1.18318,8.94979,5.30311,18.279,1.41138,26.63316-1.41259,3.03233-3.80585,5.67452-5.10925,8.7433-2.7592,6.49636-.25777,13.70176-.63281,20.61595-.48448,8.93161-6.16516,17.538-14.80657,22.43244,14.76344.45865,28.80366-6.84077,38.09315-16.7876s14.46277-22.28423,18.34107-34.628a75.2815,75.2815,0,0,0,3.805-17.92219,25.83489,25.83489,0,0,0-1.2085-10.38585,39.57451,39.57451,0,0,0-5.3421-9.12325c-2.32605-3.27044-4.716-6.60515-8.14786-9.03848-4.227-2.99707-12.37788-6.00629-17.98536-5.57014C971.79334,290.48142,970.34315,297.78336,970.05372,302.55716Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M992.792,326.99958s8.56888,30.38059,1.558,38.94947,42.06542-3.89495,42.06542-3.89495-24.14867-24.14867-12.46383-39.72845Z" transform="translate(-56 -36.85319)" fill="#ffb9b9"/><path d="M992.792,326.99958s8.56888,30.38059,1.558,38.94947,42.06542-3.89495,42.06542-3.89495-24.14867-24.14867-12.46383-39.72845Z" transform="translate(-56 -36.85319)" opacity="0.1"/><polygon points="719.6 488.394 818 390.294 719.6 292.194 749.6 262.294 878 390.294 749.6 518.294 719.6 488.394 719.6 488.394" fill="#6c63ff"/><polygon points="908.748 695.221 908.748 717.812 920.433 731.833 930.56 727.159 927.444 694.442 908.748 695.221" fill="#ffb9b9"/><path d="M969.42235,753.10675s-3.116-10.90585-8.56888-3.116-10.90585,24.92766-14.02181,25.70665-24.92766,24.92766-3.116,24.92766,28.82261-10.12686,28.82261-10.12686,21.8117-8.56889,21.8117-10.12687-3.116-30.38058-4.67394-30.38058-2.337,5.45293-6.23191,5.45293S969.42235,753.10675,969.42235,753.10675Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><polygon points="960.941 699.116 960.162 720.149 978.857 727.938 978.857 697.558 960.941 699.116" fill="#ffb9b9"/><path d="M1037.19442,757.00169s-10.12686-10.90585-15.57978-8.56888a53.81171,53.81171,0,0,0-7.7899,3.89495s-3.11595,10.12686-4.67393,18.69574-2.337,12.46383-3.89495,15.57979-3.116,14.8008,12.46383,16.35878,20.25372-7.01091,20.25372-7.01091l3.89495-20.25372S1040.31038,757.00169,1037.19442,757.00169Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M974.87528,511.62005s-22.59069,50.63431-19.47474,96.59468c0,0-7.78989,17.91676-3.11595,45.96037S963.19044,738.306,963.19044,738.306s21.03271,2.337,22.59069-1.558c0,0,1.558-38.94946,3.11595-40.50744s-.779-37.39149-3.11595-44.4024,21.8117-76.341,21.8117-76.341l-6.23192-86.46782Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M974.87528,511.62005s-22.59069,50.63431-19.47474,96.59468c0,0-7.78989,17.91676-3.11595,45.96037S963.19044,738.306,963.19044,738.306s21.03271,2.337,22.59069-1.558c0,0,1.558-38.94946,3.11595-40.50744s-.779-37.39149-3.11595-44.4024,21.8117-76.341,21.8117-76.341l-6.23192-86.46782Z" transform="translate(-56 -36.85319)" opacity="0.1"/><path d="M968.64336,508.5041l14.8008,31.93856s7.0109,72.446,10.90585,81.79388c0,0,1.558,26.48564,8.56888,35.05452s12.46383,84.13085,12.46383,84.13085,19.47474,5.45292,21.03271,0,6.23192-42.84442,6.23192-42.84442,1.558-31.93856-7.01091-52.97127,10.12687-96.59468,10.12687-96.59468,19.47473-36.6125-8.56889-66.21409Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><circle cx="953.9298" cy="267.5557" r="31.93856" fill="#ffb9b9"/><path d="M1039.53139,352.70623s-33.49654,0-38.17048,3.89495a6.2148,6.2148,0,0,1-8.56888,0s-11.68484.779-14.8008,10.12686-12.46383,21.8117-12.46383,21.8117-14.0218,10.12686-6.23191,36.6125,1.558,69.33,1.558,69.33-6.23192,9.34787,0,13.24282,8.56888,5.45292,7.78989,8.56888,70.888-25.70665,70.888-31.15957-1.558-10.12686,0-12.46383,3.116-6.23192,1.558-10.12686,1.558-4.67394.779-8.56889,3.895-32.71755,7.0109-45.18138S1051.21623,353.48522,1039.53139,352.70623Z" transform="translate(-56 -36.85319)" fill="#d0cde1"/><path d="M921.53291,429.05362s-30.78848-23.37611-33.12545-14.80723S910.99815,442.29,910.99815,442.29Z" transform="translate(-56 -36.85319)" fill="#ffb9b9"/><path d="M1023.17262,356.60118s-36.6125,65.4351-37.39149,74.783-.779,10.12686-3.89495,9.34788-45.96037-5.45293-49.85532-3.89495-11.68484-9.34787-11.68484-9.34787S905.54523,442.29,908.66118,445.406s12.46383,4.67394,14.02181,8.56888,3.89495,7.7899,10.90585,7.01091S988.1181,473.44958,994.35,471.11261s7.78989-6.23192,10.90585-6.23192,9.34787-3.11595,9.34787-3.89494,21.8117-42.06543,21.8117-42.06543S1062.12208,362.83309,1023.17262,356.60118Z" transform="translate(-56 -36.85319)" fill="#d0cde1"/><path d="M994.11433,324.81412c-.44276-3.16315-2.06273-6.03281-2.89375-9.1168a18.92542,18.92542,0,0,1,2.15464-14.69554c4.58114-7.39921,13.57543-10.67633,19.8481-16.70863.13,3.07271,2.26209,5.69857,4.61867,7.67467s5.0595,3.57914,7.05494,5.91937a23.18422,23.18422,0,0,1,4.109,8.32352,29.24582,29.24582,0,0,1,1.62312,10.917,13.68907,13.68907,0,0,1-4.73071,9.702c-2.33628,1.84647-5.601,2.901-6.72979,5.65669a9.64383,9.64383,0,0,0-.37513,4.26987c.53486,8.57042,1.03463,17.29348-.98353,25.64005s-6.96258,16.41045-14.71162,20.11053c6.368.45177,12.87041.89222,19.04877-.71525s12.08706-5.65526,14.21717-11.67346c1.05082-2.96888,1.15021-6.27088,2.64328-9.04382,3.779-7.01837,14.214-7.33837,19.34-13.44269,2.05133-2.44284,3.0437-5.59074,3.77926-8.69468,4.32826-18.26461,1.28722-37.65876-5.30174-55.23474-2.27105-6.058-5.09851-12.15764-9.9697-16.41543-4.14514-3.62317-9.43855-5.61944-14.67334-7.32431-7.63963-2.48808-15.50959-4.52657-23.53987-4.78936a29.89721,29.89721,0,0,0-10.33347,1.20642,30.722,30.722,0,0,0-9.09193,5.17932c-12.57933,9.788-21.1439,25.43159-20.00738,41.32979.68769,9.61973,4.76363,18.72357,9.99979,26.82267,1.83133,2.83263,6.15833,8.87262,10.18007,7.09154C993.03667,335.18749,994.59253,328.23048,994.11433,324.81412Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M494.6,434.14681h40v-40h-40Zm200.8-40h-40v40h40Zm-120.4,40h40v-40H575Z" transform="translate(-56 -36.85319)" fill="#6c63ff"/><ellipse cx="206.20587" cy="211.8387" rx="33.6569" ry="26.25238" fill="#2f2e41"/><path d="M267.92755,429.42945s30.29121,2.01941,35.67631-2.01942,28.2718,5.38511,30.29121,10.77021-32.31062,6.05824-37.69573,6.05824-30.96435,8.07766-30.96435,8.07766Z" transform="translate(-56 -36.85319)" fill="#a0616a"/><path d="M205.55224,742.99151s-14.117,35.59927-6.75158,39.89573,84.70171,1.22756,84.70171,1.22756,12.88939-7.97914-1.84134-13.50317c0,0-12.27561-.61378-20.25476-5.524s-17.18585-14.117-17.18585-14.117-.61378-13.50317-5.524-10.43426a12.61392,12.61392,0,0,0-5.524,8.59292Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M205.55224,742.99151s-14.117,35.59927-6.75158,39.89573,84.70171,1.22756,84.70171,1.22756,12.88939-7.97914-1.84134-13.50317c0,0-12.27561-.61378-20.25476-5.524s-17.18585-14.117-17.18585-14.117-.61378-13.50317-5.524-10.43426a12.61392,12.61392,0,0,0-5.524,8.59292Z" transform="translate(-56 -36.85319)" opacity="0.1"/><polygon points="384.4 487.394 285.9 389.294 384.3 291.194 354.3 261.294 226 389.294 354.4 517.294 384.4 487.394" fill="#6c63ff"/><path d="M183.7853,753.882s-15.48218,39.042-7.40452,43.754,92.893,1.34628,92.893,1.34628,14.1359-8.7508-2.01941-14.809c0,0-13.46276-.67314-22.21356-6.05824S226.193,762.63276,226.193,762.63276s-.67314-14.809-6.05824-11.44335a13.83376,13.83376,0,0,0-6.05824,9.42393Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M263.21558,506.16718l-9.42393,84.81539s-3.36569,40.38828-13.46276,49.13907c0,0,0,12.78962-3.36569,16.82845l-4.712,53.1779s6.73138,19.521,6.05824,22.88669,2.69256,14.1359,2.01942,15.48218-32.31063,0-32.31063,0l6.73138-108.37522,20.86728-150.78291Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M263.21558,506.16718l-9.42393,84.81539s-3.36569,40.38828-13.46276,49.13907c0,0,0,12.78962-3.36569,16.82845l-4.712,53.1779s6.73138,19.521,6.05824,22.88669,2.69256,14.1359,2.01942,15.48218-32.31063,0-32.31063,0l6.73138-108.37522,20.86728-150.78291Z" transform="translate(-56 -36.85319)" opacity="0.1"/><path d="M246.38713,503.47463s-7.40452,69.33321-10.77021,84.14225a191.45128,191.45128,0,0,0-4.03883,29.61807s-.67313,21.54041-6.73138,27.59866a18.194,18.194,0,0,0-5.3851,13.46276s-6.05824,67.98693-2.69255,76.06459,6.73138,14.809,3.36569,20.19414-40.38828,5.3851-40.38828,1.34628,0-7.40452-2.01942-9.42394,0-14.809,0-14.809-8.07765-59.90928-.67313-77.41087,10.7702-65.29439,10.7702-65.29439-5.3851-54.52418-12.11648-63.275,1.34628-39.71514,1.34628-39.71514Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M227.43564,288.1652c.78254,1.78268,2.65563,2.77523,4.36085,3.71467,9.88293,5.4447,18.15564,13.33867,26.30611,21.14167a30.88184,30.88184,0,0,1,1.22533-20.88436c.97311-2.25349,2.24854-4.67575,1.553-7.02976-.51152-1.73109-1.98559-2.97969-3.41344-4.084a105.83513,105.83513,0,0,0-10.40969-7.10206c-2.52042-1.50791-7.7023-5.52207-10.59458-5.08531-.15184,3.90788-.23113,7.40176-1.94245,11.05414C234.11479,280.75653,227.73479,288.84669,227.43564,288.1652Z" transform="translate(-56 -36.85319)" fill="#a0616a"/><circle cx="205.8693" cy="232.36941" r="27.59866" fill="#a0616a"/><path d="M263.21558,334.517s4.712-23.55983-8.75079-31.63749-28.94494-17.50159-28.94494-17.50159-4.712-.67313-6.73138,9.42394c0,0-38.36886,7.40451-42.40769,43.754s2.69255,89.52735,2.69255,89.52735-6.05824,46.44652-13.46276,71.35263c0,0-6.05824,5.3851,20.86728-2.69255S260.523,519.62994,260.523,519.62994s4.712-4.712,4.712-8.07766,5.38511-22.88669,5.38511-22.88669,4.712-82.796,6.73138-92.21991S269.27382,335.86326,263.21558,334.517Z" transform="translate(-56 -36.85319)" fill="#575a89"/><path d="M255.365,272.0658a11.50929,11.50929,0,0,1,5.41275-1.44156,10.30066,10.30066,0,0,0,5.35434-1.59542c2.607-2.00142,2.79823-5.86932,4.70539-8.54606,2.76117-3.87534,8.2695-4.34179,13.02393-4.14789,2.908.11859,6.03964.29225,8.48843-1.28058,2.5139-1.61465,3.65338-4.65693,4.501-7.52194,1.00241-3.38806,1.65075-7.53139-.83318-10.04413-1.72489-1.7449-4.44757-2.09-6.36371-3.62242-1.98677-1.5889-2.80432-4.17476-3.88425-6.47815a17.50685,17.50685,0,0,0-5.63735-7.06119c-3.61468-2.51149-8.23146-3.07467-12.63275-3.0276s-8.82105.62578-13.18933.08567c-3.579-.44252-7.14744-1.633-10.71484-1.10534-4.5458.67239-8.30654,4.10189-10.54644,8.11427s-3.201,8.59226-4.133,13.092l-2.53464,12.23819c-.78614,3.79576-1.57551,7.6924-.96866,11.52091,1.258,7.93655,8.27687,14.24507,8.76049,22.26613a13.66856,13.66856,0,0,1,8.343-9.92064,2.61085,2.61085,0,0,1,1.69982-.2062c.69733.22289,1.1049.91957,1.545,1.50462,1.15307,1.53294,4.77533,3.85871,6.8286,2.77123C254.42675,276.6867,253.0552,273.6323,255.365,272.0658Z" transform="translate(-56 -36.85319)" fill="#2f2e41"/><path d="M185.80471,397.792s-4.712,29.61807,14.809,26.92552c0,0,10.09707-1.34628,11.44334,0s51.15849-7.40452,57.88987-14.809c0,0,8.07766-2.69255,12.11648,1.34628s44.42711,8.07766,32.31063-4.03883-30.96435-14.809-30.96435-14.809l-25.57924,1.34627s-13.46276,4.03883-21.54042,0-30.96435-2.69255-30.96435-2.69255Z" transform="translate(-56 -36.85319)" fill="#a0616a"/><path d="M213.40337,304.22578s-30.29121,3.36569-30.29121,47.11966v55.87045s16.82845-7.40452,20.19414-6.73138,16.82845-8.75079,16.82845-8.75079,15.48217-36.34945,14.1359-46.44652S233.59751,305.57205,213.40337,304.22578Z" transform="translate(-56 -36.85319)" fill="#575a89"/><ellipse cx="205.8693" cy="215.20439" rx="25.91581" ry="13.46276" fill="#2f2e41"/><ellipse cx="181.63634" cy="217.56037" rx="9.08736" ry="22.55012" fill="#2f2e41"/></svg>
      </div>
      <div className="welcome-text">
          <h3 className="text-h3">One-On-One Volunteer App</h3>
          <h3>Connecting helpers to those who need it</h3>
          </div>
      </main>
    );
  }
}
