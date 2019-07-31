var hash = 'dnWyCmUy';
var temp = 'cherry{';
var siteTag = 'cherryblog';
var gotit=0
var breakit=0
for (var i=0;i<26;i++)
{
	if(breakit)
		break;
	for (var j=0;j<26;j++)
	{
		if(gotit)
		{
			breakit=1;
			break;
		}

		for (var k=0;k<26;k++)
		{
			masterKey = temp + String.fromCharCode(i+97,j+97,k+97) + '}' ;
			var s = b64_hmac_sha1(masterKey,siteTag);
			if(s.substr(0,8) == hash)
			{
				console.log('--------------Possible-Password-----------\n'+masterKey);
				gotit=1;
				break;
			}
			else
				console.log('Trying: '+masterKey);

		}
	}
}

