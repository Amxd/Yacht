define("UsrCreate4RentalsMiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "CloseButton2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CloseButton2_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "close-button-icon",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kqlxxmk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_1hwnd7a",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_1hwnd7a",
					"mode": "List",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_r30xr1l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_r30xr1l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kqlxxmk",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Customer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_54nioc4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupParameter1_54nioc4",
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_b5o46bi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_b5o46bi_caption)#",
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
				"name": "CancelButton2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CancelButton2_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateRentals",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CreateRentals_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.SaveRunCloseRequest"
					},
					"clickMode": "default"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PageParameters_UsrLookupParameter1_1hwnd7a": {
						"modelConfig": {
							"path": "PageParameters.UsrYacht"
						}
					},
					"PageParameters_UsrLookupParameter1_1hwnd7a_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PageParameters_UsrLookupParameter1_54nioc4": {
						"modelConfig": {
							"path": "PageParameters.UsrCustomer"
						}
					},
					"PageParameters_UsrLookupParameter1_54nioc4_List": {
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
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			    request: "usr.SaveRunCloseRequest",
			    handler: async (request, next) => {
			
			        // 1. Trigger out-of-the-box page validation
			        const validationErrors = await request.$context.validate();
			        
			        // 2. Check if validation failed (empty required fields)
			        if (validationErrors && Object.keys(validationErrors).length > 0) {
			            
			            // Show a native warning popup
			            await request.$context.executeRequest({
			                type: "crt.ShowDialogRequest",
			                $context: request.$context,
			                dialogConfig: {
			                    data: {
			                        message: "Please select a customer before proceeding.",
			                        actions: [{
			                            key: "OK",
			                            config: { color: "primary", caption: "OK" }
			                        }]
			                    }
			                }
			            });
			            
			            // Return immediately to stop the business process from running
			            return; 
			        }
			
			        // 3. Get values from the mini-page
			        let yatchId = await request.$context.PageParameters_UsrLookupParameter1_1hwnd7a;
			        let customerId = await request.$context.PageParameters_UsrLookupParameter1_54nioc4;
			            
			        // 4. Run the Business Process
			        await request.$context.executeRequest({
			            type: "crt.RunBusinessProcessRequest",
			            processName: "UsrProcess_CreateFourYatchRentals",
			            processParameters: {
			                In_YachtId: yatchId.value,
			                In_CustomerId: customerId.value
			            },
			            $context: request.$context
			        });
			        
			        // 5. Close the window/page
			        await request.$context.executeRequest({
			            type: "crt.ClosePageRequest",
			            $context: request.$context
			        });
			        
			        return next?.handle(request);
			    }
			},
			{
			    request: "crt.CanDiscardUnsavedDataRequest",
			    handler: async (request, next) => {
			        // This instantly tells the system "Yes, it is safe to close" 
			        // without showing the warning popup to the user!
			        return true; 
			    }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});