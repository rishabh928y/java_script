#include<iostream>
using namespace std;

int digit_sum(int x) {
    int ans = 0;

    while(x) {
        ans += x%10;
        x/=10;
    }
   
    return ans;
}

int main(){
    int t;
    cin >> t;

    while(t--) {
        int n, q;
        cin >> n >> q;

        int arr[n];
        for(int i=0; i<n; i++) {
            cin >> arr[i];
        } 

        for(int j=0; j<q; j++) {
            int num;
            cin >> num;
            if(num == 1) {
                int l, r;
                cin >> l >> r;

                for(int i = l-1; i<=r-1; i++) {
                    arr[i] = digit_sum(arr[i]);
                }

            }
            else if(num == 2) {
                int idx;
                cin >> idx;
                cout << arr[idx-1] << endl;
            }
        }
    }
    return 0;
}