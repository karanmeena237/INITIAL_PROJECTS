#include <iostream>

using namespace std;

// multiple inheritance

class Area
{
protected:

    int x,y;

    void calc1()
    {
        
           cout<<"the area of rectangle is "<<x*y<<endl;
    }
      void set2(int a,int b){
        x=a;
        y=b;
        calc1();
    }
};

class Perimeter
{
protected:
    int x,y;
    void calc2()
    {
       
        cout<<"the perimeter of rectangle is:"<<2*(x+y)<<endl;
    }
    void set1(int a,int b){
        x=a;
        y=b;
        calc2();
    }
};

class Rectangle : public Area, public Perimeter
{
    public:
    void show(int x,int y)
    {
        set1(x,y);

        set2(x,y);

    }
};
int main()
{
    int x,y;
    cout<<"enter length of the rectangle: "<<endl;
    cin>>x;
    cout<<"enter breadth of the rectangle: "<<endl;
     cin>>y;
     Rectangle obj;
     //obj.calc1(l,b);
     //obj.calc2(l,b);
     obj.show(x,y);
    return 0;
}