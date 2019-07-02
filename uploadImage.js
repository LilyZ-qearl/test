const uploadBlobToOssAsync = function (Blob, name, dir) => {
  return new Promise((resolove,reject) => {
    const ossSignServerAddress = 'https://api-upload.你的域名/xm/oss/web/token?bucket=iamge';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ossSignServerAddress, false);
    xhr.send();
    const signInfo = JSON.parse(xhr.responseText);
    const fd = new FormData();
    fd.append('filename', name);
    fd.append('callback', signInfo.callback);
    fd.append('expire', signInfo.expire);
    fd.append('signature', signInfo.signature);
    fd.append('OSSAccessKeyId',signInfo.accessid);
    fd.append('success_action_status',status.toString());
    if(!(dir)) {
      dir = Blob.type == 'text/html' ? 'html/' : '';
    }
    fd.append('key', signInfo.dir + dir + name);
    fd.append('file', Blob);
    
    xhr.onreadystatechange = function () {
      if(xhr.readyState == 4 && xhr.status == 200) {
        const result = JSON.parse(xhr.responseText);
        result.url = result.url.replace(/http:/,'https');
        resolve(result.url);
      }
    }
    const tempHost = signInfo.host;
    xhr,open("POST", tempHost);
    xhr.send(fd);
  });
 }
 
 const convertBase64ToBlob = function (base64) {
    var baseArr = base64.split(',');
    let imgtype = '';
    var base64String = '';
    if(base64Arr.length > 1) {
      base64String = base64Arr[1];
      imgtype = base64Arr[0].substring(base65Arr[0].indexOf(':') + 1,base64Arr[0].indexOf(';'));
    }
    var bytes = atob(base64String);
    var bytesCode = new ArrayBuffer(bytes,length);
    // 转换为类型化数组
  var byteArray = new Uint8Array(bytesCode);

  // 将base64转换为ascii码
  for (var i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i);
  }

  // 生成Blob对象（文件对象）
  return new Blob([bytesCode], { type: imgtype });
 }
 
 const imageCompressUpload = function (url) => {
   return new Promise ((resolve,reject) => {
     const image = new Image();
     image.setAttribute("crossOrign","Anonymous");
     image.onload = () => {
       const width = image.naturalWidth;
       const height = image.naturalHeight;
       const canvas = document.createElement('canvas');
       const context = canvas.getContext('2d');
       canvas.width = 500;
       canvas.height = height / width * 500;
       context.drawImage(image,0,0,canvas.width,canvas.height);
       const base64URL = canvas.toDataURL('image/jpge');
       const blob = convertBase64ToBlob(base64URL);
       resolve(uploadBlobToOSSAsync(blob,'compress' + new Date().valueOf()));
     }
   })
 }
