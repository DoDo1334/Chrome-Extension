chrome.downloads.onDeterminingFilename.addListener(async function listener(downloadItem, suggest){
//Split MIME type with "/", if it is "video/mp4" for example, use index 0 to get folder, and index 1 to add as the file extension to the filename 
    mimeType = downloadItem.mime.split("/")

    
    
//Should I make a new folder for different file extensions? Or just keep them all in their MIME type folder like that?
//Also, what should I actually name the files? Just something like generic? Or have it prompt me when I go and download it? 
    suggest({filename:mimeType[0] + "s" + "/BEEPBEEP." + mimeType[1]})
})