//SCRIPT FOR MEASURE DATA FROM MEASUREMENT PARAM

var apcList = property("apcValue");

var rotation = 1.0;
let xRot = 0.0, yRot = 0.0, xRoff = 0.0, yRoff = 0.0, xRRed = 0.0, yRRed = 0.0, xRRot = 0.0, yRRot = 0.0;

if(parseFloat(apcList.find(x => x.NAME == "Xrot" ).VALUE).toFixed(2) > 0)
xRot = parseFloat(apcList.find(x => x.NAME == "Xrot" ).VALUE).toFixed(2);
else
xRot =  parseFloat(rotation).toFixed(2);

if(parseFloat(apcList.find(x => x.NAME == "Yrot" ).VALUE).toFixed(2) > 0)
yRot = parseFloat(apcList.find(x => x.NAME == "Yrot" ).VALUE).toFixed(2);
else
yRot =  parseFloat(rotation).toFixed(2);

if(parseFloat(apcList.find(x => x.NAME == "XRoff" ).VALUE).toFixed(2) > 0)
xRoff = parseFloat(apcList.find(x => x.NAME == "XRoff" ).VALUE).toFixed(2);

if(parseFloat(apcList.find(x => x.NAME == "YRoff" ).VALUE).toFixed(2) > 0)
yRoff = parseFloat(apcList.find(x => x.NAME == "YRoff" ).VALUE).toFixed(2);

setProperty("Orthogonality", 0.5);
setProperty("Rotation", 0.6);
setProperty("ShotscallingX", 0.7);
setProperty("ShotscallingY", 0.8);
setProperty("ShotOrthogonality", 0.9);
setProperty("Rotation", parseFloat(rotation).toFixed(2));
setProperty("Dose", 0.0);

setProperty("Xoff", parseFloat(apcList.find(x => x.NAME == "Xoff" || x.NAME.includes("OffsetX")).VALUE).toFixed(2));
setProperty("Yoff", parseFloat(apcList.find(x => x.NAME == "Yoff"  || x.NAME.includes("OffsetY")).VALUE).toFixed(2));
setProperty("Xsca", parseFloat(apcList.find(x => x.NAME == "Xsca" || x.NAME.includes("scallingX")).VALUE).toFixed(2));
setProperty("Ysca", parseFloat(apcList.find(x => x.NAME == "Ysca" || x.NAME.includes("scallingY")).VALUE).toFixed(2));
setProperty("Xrot", xRot );
setProperty("Yrot", yRot);
setProperty("XRoff", parseFloat(xRoff).toFixed(2));
setProperty("YRoff", parseFloat(yRoff).toFixed(2));

// Handling X_R_Red
if (parseFloat(apcList.find(x => x.NAME == "X_R_Red").VALUE).toFixed(2) > 0) {
    xRRed = parseFloat(apcList.find(x => x.NAME == "X_R_Red").VALUE).toFixed(2);
}
setProperty("X_R_Red", parseFloat(xRRed).toFixed(2));

// Handling Y_R_Red
if (parseFloat(apcList.find(x => x.NAME == "Y_R_Red").VALUE).toFixed(2) > 0) {
    yRRed = parseFloat(apcList.find(x => x.NAME == "Y_R_Red").VALUE).toFixed(2);
}
setProperty("Y_R_Red", parseFloat(yRRed).toFixed(2));

// Handling X_R_Rot
if (parseFloat(apcList.find(x => x.NAME == "X_R_Rot").VALUE).toFixed(2) > 0) {
    xRRot = parseFloat(apcList.find(x => x.NAME == "X_R_Rot").VALUE).toFixed(2);
}
setProperty("X_R_Rot", parseFloat(xRRot).toFixed(2));

// Handling Y_R_Rot
if (parseFloat(apcList.find(x => x.NAME == "Y_R_Rot").VALUE).toFixed(2) > 0) {
    yRRot = parseFloat(apcList.find(x => x.NAME == "Y_R_Rot").VALUE).toFixed(2);
}
setProperty("Y_R_Rot", parseFloat(yRRot).toFixed(2));

setProperty("reticleID", apcList[0].RETICLE_ID);
setProperty("MOD_OPER_NO", apcList[0].OPERATION_NUMBER.split('.')[0]);

var postDateTime = new Date();
setProperty("currentDate", postDateTime.toISOString());

setOutcome('Done');
