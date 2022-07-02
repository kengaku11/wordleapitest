const apiUrls = require("../config/apiUrls");
const { GET } = require("../utils/apis/customCall");

const expected=[,,,,]
const pres=[]
const correct =[]
const vowels = "aeiouAEIOU"

class GuessDaily{
     async getAllCharacters(){
        const characters = ["ABCDE","FGHIJ","KLMNO","PQRST","UVWXY","ZZZZZ"]
        return characters
    }

    async getGuess( text){
        const reponse = await GET(apiUrls.GUESS_DAILY,{guess:`${text}`,size:5})
        return reponse
    }

    async getPresentWord(characters){
        for (var j= 0; j<characters.length;j++){
            const res = await this.getGuess(characters[j]);
            for(let i=0;i<res.data.length;i++){
                const re = res.data[i].result
                if(re==='present'){
                    pres.push(res.data[i].guess)
                }else if(re==='correct'){
                    correct.push(res.data[i].guess)
                    expected[i]=(res.data[i].guess)
                }
            }    
        }
    }

    async finalResult(){  
        const merged=correct.concat(pres)
        if(merged.length<5){
            for(var i=0; i< merged.length;i++){
                if (vowels.includes(merged[i])) {
                    merged.push(merged[i])
                    if(merged.length===5){
                        break;  
                    }
                 }
            }
        }
        const per = await this.permute(merged)
        for(var k=0;k<per.length;k++){
            const res = await this.getGuess(per[k].join(''));
            for(let l=0;l<res.data.length;l++){
                const re = res.data[l].result
                if(re==='correct'){
                    expected[l]=(res.data[l].guess)
                }
            }  
        }

        console.log("Final Expected Word is :  " + expected.join(''))    
    }
    
     async permute(arr) {
        var permuteArray = [],
            l = arr.length,
            used = Array(l), 
            data = Array(l); 
        (function track(p) {
          if(p == l) return permuteArray.push(data.slice());
          for(var i=0; i<l; ++i) if(!used[i]) {
            used[i] = true;      
            data[p] = arr[i];  
            track(p+1); 
            used[i] = false;     
          }
        })(0);
        return permuteArray;
      }

    getKeyBoard(){
        let characters = [];
    for (let i=65; i<91; i++)
        characters.push( String.fromCharCode(i) );
        console.log(characters)
    return characters;
    }

}
module.exports={GuessDaily}