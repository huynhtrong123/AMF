declare @lotNotHold int = 0;
if ('{{Workflow.Properties.blLotNotHold}}' = 'true')
begin
set @lotNotHold = 1;
end

--declare @recipeText nvarchar(100) = concat('{{Workflow.Properties.portID}}',"    /" , '{{Workflow.Properties.physicalRecipe}}')
declare @recipeText nvarchar(100) ='{{Workflow.Properties.physicalRecipeID}}';

UPDATE t set [blLotNotHold] = @lotNotHold
FROM [SIVIEW_INTEGRATION].[dbo].[TxStartLotsReservationReq] t where ID = {{Workflow.Properties.ReservationReqID}}

INSERT INTO [SIVIEW_INTEGRATION].[dbo].[MACHINE_TRANSACTION]
           ([MACHINE_ID]
           ,[PORT_ID]
           ,[LOT_ID]
           ,[TRANSACTION_STATUS_ID]
           ,[REQUEST_DATA]
           ,[RESPOND_DATA]
           ,[DESCRIPTION]
           ,[METHOD_ID]
           ,[TIMESTAMP]
           ,[EQUIPMENT_ID]
           ,[CASSETTE_ID], [RECIPE_ID], [IS_PROCESSED], [TxStartLotsReservationReqID],[RETICLE_ID])
     VALUES
           ('{{Workflow.Properties.machineID}}'
           ,'{{Workflow.Properties.portID}}'
           ,'{{Workflow.Properties.lotID}}'
           ,1
           ,''
           ,''
           ,''
           ,0
           ,getdate()
           ,'{{Workflow.Properties.equipmentID}}'
           ,'{{Workflow.Properties.cassetteID}}', @recipeText, 0, {{Workflow.Properties.ReservationReqID}},'{{Workflow.Properties.ReticleID}}')
		   
		   select @@Identity
