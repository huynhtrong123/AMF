var trans = property("trans");
setProperty("transLength", trans.length);
if(trans.length === 1)
{
    setProperty("currentTransaction", trans.filter(item => item.LOT_NO === property("currentLotID")));
    setProperty("processStatus", "Done");
}
else
{
    var isProccess = trans.filter(item => item.IS_PROCESSED === true);

if(isProccess != null && isProccess.length === trans.length)
{
    setProperty("currentTransaction", trans.filter(item => item.LOT_NO === property("currentLotID")));
    setProperty("processStatus", "Done");
}
else
{
     setProperty("processStatus", "Wait");
}
}

setOutcome('Done');
