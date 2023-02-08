#include<iostream>
using namespace std;

int main(){
    int t;
    cin >> t;

    while(t--) {
        int l;
        cin >> l;

        string s;
        cin >> s;
        
        int x = 0;
        int y = 0;
        int count = 0;

        for(int i=0 ; i<l; i++) {
            if(s[i] == 'L') {
                x--;
            }
            else if(s[i] == 'R') {
                x++;
            }
            else if(s[i] == 'U') {
                y++;
            }
            else if(s[i] == 'D') {
                y--;
            }

            if(x == 1 && y == 1) {
                cout << "YES" << endl;
                count++;
            }

        }

        if(count == 0) {
            cout << "NO" << endl;
        }
        
    }
    return 0;
}