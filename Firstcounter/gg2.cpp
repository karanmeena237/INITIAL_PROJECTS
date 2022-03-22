#include<bits/stdc++.h>
using namespace std;
int convert(long long n) {
  int dec = 0, i = 0, rem;

  while (n!=0) {
    rem = n % 10;
    n /= 10;
    dec += rem * pow(2, i);
    ++i;
  }

  return dec;
}
void substring(char s[], char sub[], int p, int len){  
   int c = 0;  
   while (c < len) {  
      sub[c] = s[p+c];   
      c++;  
   }  
   sub[c] = '\0';  
}  
void Chalo(){
  char S[100], c[100];
  cin>>S;
  long long int l= sizeof(S) / sizeof(S[0]);
 long long int p= ((l*(l+1))/2);
    string g[p];
    for(int i = 0; i < l; i++){  
       
        for(int j = 1; j <= l-i; j++){  
            substring(S,c,i,j);  
            g[i]=c; 
        }  
    }
    for(int i =0;i<p;i++){
        int h = stoi(g[i]);
        int num = convert(h);
        if(num==1){
             cout<<"No\n"; break;
        }
        if(num%2!=0){
            cout<<"Yes\n";
            break;
        }
        cout<<"No\n";
    }  

}
int main(){
   int it;
   cin>>it;
   while(it--){
       Chalo();
   }
}