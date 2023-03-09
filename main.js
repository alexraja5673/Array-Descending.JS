 //descending order
	   let c=[54,87,-89,0,4,78,25,87,2];
			function desce(c){
			for(i=0;i<c.length;i++){
				for(j=i+1;j<c.length;j++){
				if(c[i]<c[j]){
					c1=c[j];
					c[j]=c[i];
					c[i]=c1;
					}
				}
			}
			console.log(c)
			}
			desce(c);