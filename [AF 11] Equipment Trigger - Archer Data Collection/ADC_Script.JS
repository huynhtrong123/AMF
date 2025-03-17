var rawdata = property("rawdata");
setProperty("AQID",rawdata.rawdata.AQID);
setProperty("equipmentID",rawdata.rawdata.equipmentID);
var listValue = [];

setProperty("measureType","APC"); 

var valueList = rawdata.rawdata.rawdata.value.Items[0].Value[2].Value;
setProperty("valueList",valueList);

 var value2001 = valueList[0].Value;
 var value2002 = valueList[1].Value;
  //setProperty("value2001",value2001);
var value2002detail = value2002[1].Value;
  //setProperty("value2002detail",value2002[1].Value);
  var waferCount = value2002detail[1].Value[0].Value[1].Value;
  setProperty("WaferCount",waferCount.length);

  waferCount.forEach(GetWaferList);
function GetWaferList(item, index, arr) {
setProperty("waferIndex" + index, item.Value[0].Value);

}

 setProperty("lotID",value2001[1].Value[0].Value);

  var objS = new Object();
 objS.Name = "SlotToMeasure";
 objS.Value =value2001[1].Value[7].Value.length;
listValue.push(objS);

 var value2002 = valueList[1].Value[1].Value[0].Value[0].Value[1].Value;
 // setProperty("value2002",value2002);
  
 var obj1 = new Object();
 obj1.Name = "Xoff";
 obj1.Value =GetItemValueInList(value2002[0], 2);
 obj1.Type ="APC";

  var obj2 = new Object();
 obj2.Name = "Yoff";
 obj2.Value =GetItemValueInList(value2002[1], 2);
  obj2.Type ="APC";
 
  var obj3 = new Object();
 obj3.Name = "Xsca";
 obj3.Value =GetItemValueInList(value2002[2], 2);
  obj3.Type ="APC";

 var obj4 = new Object();
 obj4.Name = "Ysca";
 obj4.Value =GetItemValueInList(value2002[3], 2);
  obj4.Type ="APC";

 var obj5 = new Object();
 obj5.Name = "Xrot";
 obj5.Value =GetItemValueInList(value2002[4], 2);
  obj5.Type ="APC";

 var obj6 = new Object();
 obj6.Name = "Yrot";
 obj6.Value =GetItemValueInList(value2002[5], 2);
  obj6.Type ="APC";

 var obj7 = new Object();
 obj7.Name = "XRoff";
 obj7.Value =GetItemValueInList(value2002[6], 2);
  obj7.Type ="APC";

 var obj8 = new Object();
 obj8.Name = "YRoff";
 obj8.Value =GetItemValueInList(value2002[7], 2);
 obj8.Type ="APC";
 
  var obj9 = new Object();
 obj9.Name = "X_R_Red";
 obj9.Value =GetItemValueInList(value2002[8], 2);
 obj9.Type ="APC";
 
  var obj10 = new Object();
 obj10.Name = "Y_R_Red";
 obj10.Value =GetItemValueInList(value2002[9], 2);
 obj10.Type ="APC";
 
  var obj11 = new Object();
 obj11.Name = "X_R_Rot";
 obj11.Value =GetItemValueInList(value2002[10], 2);
 obj11.Type ="APC";
 
  var obj12 = new Object();
 obj12.Name = "Y_R_Rot";
 obj12.Value =GetItemValueInList(value2002[11], 2);
 obj12.Type ="APC";

 listValue.push(obj1);
listValue.push(obj2);
listValue.push(obj3);
listValue.push(obj4);
listValue.push(obj5);
listValue.push(obj6);
listValue.push(obj7);
listValue.push(obj8);
listValue.push(obj9);
listValue.push(obj10);
listValue.push(obj11);
listValue.push(obj12);

var valueSPC = valueList[1].Value[1].Value[1].Value[0].Value[1].Value[0].Value;

waferCount.forEach(AddSPCData);

function AddSPCData(item, index, arr) {
    
//setProperty("AddSPCData" + index,item);

// var ob1 = new Object();
// ob1.Name = "SlotNumber_" + index;
// ob1.Value = item.Value[0].Value;
// ob1.WaferIndex = item.Value[0].Value;

var ob2 = new Object();
ob2.Name = "SequenceNumber" ;
ob2.Value = item.Value[1].Value;
ob2.WaferIndex = item.Value[0].Value;

//Modeled_Mean_
var ob3 = new Object();
ob3.Name = "Modeled_Mean";
ob3.Value = GetItemValueInList(item.Value[2].Value[2],1);
ob3.WaferIndex = item.Value[0].Value;

// Modeled_Min 
var ob4 = new Object();
ob4.Name = "Modeled_Min";
ob4.Value = GetItemValueInList(item.Value[2].Value[2],2);
ob4.WaferIndex = item.Value[0].Value;
// Modeled_Max
var ob5 = new Object();
ob5.Name = "Modeled_Max" ;
ob5.Value = GetItemValueInList(item.Value[2].Value[2],3);
ob5.WaferIndex = item.Value[0].Value;
// Modeled_Median 
var ob6 = new Object();
ob6.Name = "Modeled_Median" ;
ob6.Value = GetItemValueInList(item.Value[2].Value[2],4);
ob6.WaferIndex = item.Value[0].Value;
// Modeled_Sigma
var ob7 = new Object();
ob7.Name = "Modeled_Sigma";
ob7.Value = GetItemValueInList(item.Value[2].Value[2],5);
ob7.WaferIndex = item.Value[0].Value;
// Modeled_Range
var ob8 = new Object();
ob8.Name = "Modeled_Range";
ob8.Value = GetItemValueInList(item.Value[2].Value[2],6);
ob8.WaferIndex = item.Value[0].Value;

//listValue.push(ob1);
listValue.push(ob2);
listValue.push(ob3);
listValue.push(ob4);
listValue.push(ob5);
listValue.push(ob6);
listValue.push(ob7);
listValue.push(ob8);
}

function GetItemValueInList(list, index)
{
    return list.Value[index].Value;
}

setProperty("listValue",listValue);
setOutcome('Done');
