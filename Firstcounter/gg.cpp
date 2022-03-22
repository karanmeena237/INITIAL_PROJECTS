#include<iostream>
using namespace std;

int doubles(int pop, int days){
    int pp=1;
    for(int i=0;i<days;i++){ 
          if(pp*2>pop) break;  
        pp*=2;  
    }
    return pp;
}
void triple(int pop,int days){
    int extra=0;
    int pops = pop;
    int day = days;
    int gg = doubles(pops,10);
    cout<<"gg"<<gg<<"\n";
    day = days - 10 ;
   
    for(int i=0;i<day;i++){
         if(gg*3>pops) break;
        gg=gg*3;  
    }
    if(gg>pops) {extra = pops-gg;  cout<<gg+extra;}
    else cout<<gg<<"\n";

}
void Chalo(){
    int pop,days;
    cin>>pop>>days;
    
    if(days==0) cout<<"1\n";
    if(days<10 &&days>0) cout<<doubles(pop,days)<<"\n";
    else triple(pop,days);
}
int main(){
   int it;
   cin>>it;
   while(it--){
       Chalo();
   }
}