function newsbot(){
    try{
      var ash = SpreadsheetApp.getActiveSpreadsheet()
      var sheets = ash.getSheets()
      var message = "";
      message += "---------------------" + "\n" + "\n";
      
      for(i=0; i< ash.getSheets().length-1; i++){
        for(j=3; j<6; j++){
          message += "" + sheets[i].getRange(j,1).getValue() + "\n";
          message += sheets[i].getRange(j,3).getValue() + "\n" + "\n";
        }
      }
      for(j=3; j<6; j++){
        message += "" + sheets[2].getRange(j,1).getValue() + "\n";
        message += sheets[2].getRange(j,2).getValue() + "\n" + "\n";
      }
      message += "---------------------" ;
      sendHttpPost(message);
    }
    catch(e){
      var message = "エラーを検知しました。";
      sendHttpPost(message);
    }
  }
  
  function sendHttpPost(message){
    var url = "https://notify-api.line.me/api/notify"
    var token = "LINEToken";
    var options =
     {
       "method"  : "post",
       "payload" : "message=" + message,
       "headers" : {"Authorization" : "Bearer "+ token}
  
     };
  
     UrlFetchApp.fetch(url,options);
  }
  
  