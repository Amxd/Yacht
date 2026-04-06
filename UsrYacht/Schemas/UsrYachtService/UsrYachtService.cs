namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;

	
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class YachtService : BaseService, IReadOnlySessionState
    {
		public const string OPERATIONAL_YACHT_STATUS_ID = "3c61b7cc-a351-4805-a2a8-48a7b641ae5e";

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetAveragePriceByDriveTypeId(string driveTypeId)
        {
            if (string.IsNullOrEmpty(driveTypeId))
            {
                return -1;
            }
			
            Select select = new Select(UserConnection)
                .Column(Func.Avg("UsrPricePerDay"))
                .From("UsrYacht")
                .Where("UsrYachtDriveTypeId").IsEqual(Column.Parameter(new Guid(driveTypeId)))
                .And("UsrYachtStatusId").IsEqual(Column.Parameter(new Guid(OPERATIONAL_YACHT_STATUS_ID)))
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
		
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string CheckIsWorking()
        {
            return "Yep, I'm here!";
        }
    }
}