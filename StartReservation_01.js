var rawrequest = property("request");

setProperty("blLotNotHold", false);
setProperty("blRecipeFound", false);
setProperty("intNoOfLots",1);

var strStartCassette = rawrequest.params.strStartCassette[0];

setProperty("StartLotsReservationID", rawrequest.id);
setProperty("cassetteID", strStartCassette.cassetteID.identifier);
setProperty("portID", strStartCassette.loadPortID.identifier);
setProperty("physicalRecipeID", strStartCassette.strLotInCassette[0].strStartRecipe.physicalRecipeID);
setProperty("ReticleID",strStartCassette.strLotInCassette[0].strStartRecipe.strStartReticle[0].reticleID.identifier);
setProperty("portGroupID", rawrequest.params.portGroupID);
setProperty("lotID", strStartCassette.strLotInCassette[0].lotID.identifier);
setProperty("equipmentID", rawrequest.params.equipmentID.identifier);
setProperty("requestUserID", rawrequest.params.requestUserID);
setProperty("userID", rawrequest.params.requestUserID.userID.identifier);
setProperty("password", rawrequest.params.requestUserID.password);
setProperty("clientNode", rawrequest.params.requestUserID.clientNode);
setProperty("controlJobID", rawrequest.params.controlJobID.identifier);
setProperty("functionID",rawrequest.params.requestUserID.functionID);
setProperty("functionID",rawrequest.params.requestUserID.functionID);
setProperty("strStartCassette", escape(JSON.stringify(rawrequest.params.strStartCassette)));
              setProperty("requestFlagForBRInfo", true); 
              setProperty("requestFlagForStatusInfo", true); 
              setProperty("requestFlagForPMInfo", true);  
              setProperty("requestFlagForPortInfo", true);  
              setProperty("requestFlagForChamberInfo", true);  
              setProperty("requestFlagForStockerInfo", true);  
              setProperty("requestFlagForInprocessingLotInfo", true); 
              setProperty("requestFlagForReservedControlJobInfo", true);

//setProperty("rawrequest", property("raw_data").replace(/.0,/g, ',').replace(/ /g, '').replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, ""));
setProperty("rawrequest", property("raw_data").replace(/.0,/g, ',').replace(/ /g, '').replace("'\"'", "").replace("'\"'", "").replace("'\"'", "").replace("'\"'", ""));
setOutcome('Done');
