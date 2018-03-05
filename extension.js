// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "replace-ne" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.replaceNotEmpty', function () {
        // The code you place here will be executed every time your command is executed
    let activeEditor = vscode.window.activeTextEditor;
    activeEditor.edit(editBuilder => {
        for(var i=0;i < activeEditor.document.lineCount;i++){
            editBuilder.replace(activeEditor.document.lineAt(i).range,removeNotEmpty(activeEditor.document.lineAt(i).text));
        }
    });
    vscode.window.showInformationMessage('Replace Successful');
    });

    context.subscriptions.push(disposable);
}
function removeNotEmpty(originalString){
    try{
        if(originalString.indexOf('notEmpty(') > -1){
            var regex = /notEmpty/gi, result, indices = [];
            //console.log('ORIGINAL STRING====>',originalString);
            while ( (result = regex.exec(originalString)) ) {
                indices.push(result.index);
            }
            var endIndices =[]; 
            for(var i =0; i< indices.length ; i++){
                endIndices.push(originalString.indexOf(')',indices[i]));
            }
            for(var i =0; i< endIndices.length ; i++){ 
                originalString = originalString.slice(0,endIndices[i]) + originalString.slice(endIndices[i]+1); 
                var j = i;
                while(j!==endIndices.length-1){
                    endIndices[j+1] = endIndices[j+1] - 1;
                    j++;
                }
            }
            return originalString.replace(/notEmpty[(]/g,'');
        }else{
            return originalString;
        }
    }
    catch(e){
        console.log('EXCEPTION====>',e);
    }    
}
exports.activate = activate;
exports.replaceNe = removeNotEmpty;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;