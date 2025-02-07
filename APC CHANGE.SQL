SELECT  BRTCLSET_DRGRP.D_THESYSTEMKEY AS RTCL_SET,BRTCLSET_DRGRP.PHOTOLAYER_IDENT, BRTCL.RTCLGRP_IDENT, BRTCL.RTCL_ID FROM SIVIEW.FBRTCLSET_DRGRP BRTCLSET_DRGRP --ON  BRTCLSET_DRGRP.PHOTOLAYER_IDENT =BMNPD_PO.PHOTOLYR_IDENT AND BPROD.RTCLSET_IDENT = BRTCLSET_DRGRP.D_THESYSTEMKEY

LEFT JOIN SIVIEW.FBRTCLSET_D_RGRP BRTCLSET_D_RGRP ON  BRTCLSET_DRGRP.D_THESYSTEMKEY= BRTCLSET_D_RGRP.D_THESYSTEMKEY AND  BRTCLSET_DRGRP.D_SEQNO= BRTCLSET_D_RGRP.D_THETABLEMARKER

LEFT JOIN SIVIEW.FBRTCLGRP BRTCLGRP ON BRTCLGRP.RTCLGRP_ID = BRTCLSET_D_RGRP.RTCLGRP_IDENT

LEFT JOIN SIVIEW.FBRTCL BRTCL ON BRTCL.RTCLGRP_IDENT = BRTCLGRP.RTCLGRP_ID

WHERE BRTCLSET_DRGRP.D_THESYSTEMKEY = (SELECT RTCLSET_IDENT FROM FBPROD WHERE D_THESYSTEMKEY='{{Workflow.Properties.routeID}}')

AND BRTCLSET_DRGRP.PHOTOLAYER_IDENT = '{{Workflow.Properties.PHOTOLAYER_IDENT}}'

ORDER BY BRTCLSET_DRGRP.D_SEQNO
---RETURN 
--- getreticleID 
D_THESYSTEMKEY
PHOTOLAYER_IDENT
RTCLGRP_IDENT
RTCL_ID----NEED GET IT


---OLD ---
SELECT STAGE_IDENT, D_SEQNO, MOD_OPER_NO, OPER_NO, PD_IDENT, PHOTOLYR_IDENT 
FROM FBMNPD_PO
WHERE D_THESYSTEMKEY='{{Workflow.Properties.routeID}}'    
AND STAGE_IDENT =  '{{Workflow.Properties.stageID}}'  
AND PHOTOLYR_IDENT <> ''
ORDER BY D_SEQNO, MOD_OPER_NO
---
SELECT STAGE_IDENT
FROM FBMNPD_PO
WHERE D_THESYSTEMKEY='{{Workflow.Properties.routeID}}'         
AND STAGE_IDENT LIKE '%LITHO%' 
AND PD_IDENT LIKE '%OVL%'
ORDER BY D_SEQNO, MOD_OPER_NO
 FETCH FIRST 1 ROWS ONLY
 --
--------------CHECK FIRST STATE 
SELECT STAGE_IDENT
FROM FBMNPD_PO
WHERE D_THESYSTEMKEY='{{Workflow.Properties.routeID}}'         
AND STAGE_IDENT LIKE '%LITHO%' 
AND PD_IDENT LIKE '%OVL%'
ORDER BY D_SEQNO, MOD_OPER_NO
 FETCH FIRST 1 ROWS ONLY
-----------
var stageValue = JSON.parse(unescape(property("firstStageValue")));

setProperty("stageDB",stageValue[0].STAGE_IDENT );
setProperty("stage",stageValue[0].STAGE_IDENT );
------------------
SELECT STAGE_IDENT, D_SEQNO, MOD_OPER_NO, OPER_NO, PD_IDENT, PHOTOLYR_IDENT 
FROM FBMNPD_PO
WHERE D_THESYSTEMKEY='{{Workflow.Properties.routeID}}'    
AND STAGE_IDENT =  '{{Workflow.Properties.stageID}}'  
AND PHOTOLYR_IDENT <> ''
ORDER BY D_SEQNO, MOD_OPER_NO
---------------------
var stageValue = JSON.parse(unescape(property("stageValue")));
setProperty("cc",stageValue);
setProperty("PHOTOLYR_IDENT",stageValue[0].PHOTOLYR_IDENT);
// var stage = stageValue[0].STAGE_IDENT.toString();
// if(stage.inludes("siview"))
// {
//     setOutcome('Siview');
// }
// else
// {
   
//}
 setOutcome('Done');
--------------
var stageValue = JSON.parse(unescape(property("stageValue")));
var stageValue2 = JSON.parse(unescape(property("getreticleID")));

setProperty("stageValue",stageValue );
setProperty("stageValue2",stageValue2 );

//setProperty("stageDB",stageValue[0].STAGE_IDENT );
setProperty("stage",stageValue[0].STAGE_IDENT );
setProperty("operationNumber",stageValue[0].OPER_NO );
//setProperty("reticleID",stageValue[0].STAGE_IDENT + stageValue[0].PHOTOLYR_IDENT );
setProperty("reticleID",stageValue2[0].RTCL_ID );
setProperty("MOD_OPER_NO",stageValue[0].MOD_OPER_NO );

// var stage = stageValue[0].STAGE_IDENT.toString();
// if(stage.inludes("siview"))
// {
//     setOutcome('Siview');
// }
// else
// {
    setOutcome('Done');
//}
