define("UsrYachtRentalModal", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "RentalStart",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrStartDate_9sepo56",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtRentalDS_UsrStartDate_9sepo56"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RentalEnd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrEndDate_433g0xh",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtRentalDS_UsrEndDate_433g0xh"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Customer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrCustomer_2xsezow",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrYachtRentalDS_UsrCustomer_2xsezow",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_jbgctc4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jbgctc4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Customer",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrManager_65twfhz",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrYachtRentalDS_UsrManager_65twfhz",
					"visible": true,
					"readonly": true,
					"placeholder": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PricePerDay",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrParentYachtUsrPricePerDay_1cw5ano",
					"control": "$UsrYachtRentalDS_UsrParentYachtUsrPricePerDay_1cw5ano",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TotalPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrTotalPrice_yq2yt89",
					"control": "$UsrYachtRentalDS_UsrTotalPrice_yq2yt89",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Comments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrComments_hoyesq0",
					"control": "$UsrYachtRentalDS_UsrComments_hoyesq0",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtRentalDS_UsrCustomer_2xsezow": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrCustomer"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_2xsezow_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrYachtRentalDS_UsrStartDate_9sepo56": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrStartDate"
						}
					},
					"UsrYachtRentalDS_UsrEndDate_433g0xh": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrEndDate"
						}
					},
					"UsrYachtRentalDS_UsrManager_65twfhz": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrManager"
						}
					},
					"UsrYachtRentalDS_UsrManager_65twfhz_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrYachtRentalDS_UsrTotalPrice_yq2yt89": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrTotalPrice"
						},
						"validators": {
							"MyTotalPriceValidator": {
								"type": "usr.TotalPriceValidator",
								"params": {
									"message": "#ResourceString(UsrTotalPrice_Invalid)#"
								}
							}
						}
					},
					"UsrYachtRentalDS_UsrComments_hoyesq0": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrComments"
						}
					},
					"UsrYachtRentalDS_UsrParentYachtUsrPricePerDay_1cw5ano": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrParentYachtUsrPricePerDay_1cw5ano"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false,
								"attributes": {
									"UsrParentYachtUsrPricePerDay_1cw5ano": {
										"path": "UsrParentYacht.UsrPricePerDay",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "UsrYachtRentalDS",
					"loadingConfig": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {

					// handle changes on StartDate, EndDate, PricePerDay so the TotalPrice is always calculated
      				if (request.attributeName === 'UsrYachtRentalDS_UsrStartDate_9sepo56' || request.attributeName === 'UsrYachtRentalDS_UsrEndDate_433g0xh' || request.attributeName === 'UsrYachtRentalDS_UsrParentYachtUsrPricePerDay_1cw5ano') {

						let pricePerDay = await request.$context.UsrYachtRentalDS_UsrParentYachtUsrPricePerDay_1cw5ano;
						let startDate = await request.$context.UsrYachtRentalDS_UsrStartDate_9sepo56;
						let endDate = await request.$context.UsrYachtRentalDS_UsrEndDate_433g0xh;
						let calculatedValue = endDate >= startDate ? (Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1) * pricePerDay : 0;

						request.$context.UsrYachtRentalDS_UsrTotalPrice_yq2yt89 = calculatedValue;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.TotalPriceValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;

						return value > 0 ? null : { "usr.TotalPriceValidator": { message: config.message } } ;
						
					};
				},
				params: [
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});