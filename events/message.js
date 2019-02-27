exports.run = async (client, message) => {
 
    
    const prefix = "!"; 
    if(!message.content.startsWith(prefix)) return; 
 
    const messageArray = message.content.split(/ +/g); 
    const cmd = messageArray[0].toLowerCase().slice(prefix.length); 
    const args = messageArray.slice(1); 
 
    client.handler.run(cmd, client, message, args);
 
 
 
}