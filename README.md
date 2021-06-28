```cpp
#include <bits/stdc++.h>   
#define IO ios_base::sync_with_stdio(false);cin.tie(NULL);
#define ll long long 
#define pll pair<ll,ll>
#define pb push_back
#define M 1000000007
#define lc '\n'
using namespace std;
deque<ll> q;
void push(ll x)
{
	while(q.size() and q.back()<x)
	{
		q.pop_back();
	}
	q.push_back(x);
}
int main()
{
    IO
    ll t=1;
    while(t--)
    {
    	q.clear();
    	ll n,m,z;
    	cin>>n>>m>>z;
    	ll dp[n+1][m+1];
    	ll dp1[n+1][m+1];
    	memset(dp,0,sizeof(dp));
    	for(ll i=1;i<=n;i++)
    	{
    		for(ll j=1;j<=m;j++)
    		{
    			dp1[i][j]=z+1;
    		}
    	}
    	ll k=2;
    	for(ll i=0;i<z;i++)
    	{
    		ll x,y;
    		cin>>x>>y;
    		dp1[x][y]=min(i+1,dp1[x][y]);
    		dp[x][y]=1;
    	}
    	
    	for(ll i=2;i<=m;i++)
    	{
    		dp[1][i]+=dp[1][i-1];
    	}
    	for(ll i=2;i<=n;i++)
    	{
    		dp[i][1]+=dp[i-1][1];
    	}
    	for(ll i=2;i<=n;i++)
    	{
    		for(ll j=2;j<=m;j++)
    		{
    			dp[i][j]=dp[i-1][j]+dp[i][j-1]+dp[i][j]-dp[i-1][j-1];
    		}
    	}
    	
    	ll row[n+1][m+1];
    	memset(row,0,sizeof(row));
    	for(ll i=1;i<=n;i++)
    	{
    		q.clear();
    		for(ll j=1;j<=m;j++)
    		{
    			push(dp1[i][j]);
    			if(j>=k)
    			{
    				row[i][j-k+1]=q.front();
    				if(q.front()==dp1[i][j-k+1])
	    			{
	    				q.pop_front();
	    			}
    			}
    			
    		}
    	}
    	ll col[n+1][m+1];
    	for(ll i=1;i<=n;i++)
    	{
    		for(ll j=1;j<=m;j++)
    		{
    			col[i][j]=n*m+1;
    		}
    	}
    	ll ans=z+1;
    	for(ll i=1;i<=m-k+1;i++)
    	{
    		q.clear();
    		ll z=1;
    		for(ll j=1;j<=n;j++)
    		{
    			push(row[j][i]);
    			if(j>=k)
    			{
    				col[j-k+1][i]=q.front();
    				if(q.front()==row[j-k+1][i])
	    			{
	    				q.pop_front();
	    			}
    			}
    			
    		}
    	}
    	
    	// for(ll i=1;i<=n;i++)
    	// {
    		// for(ll j=1;j<=m;j++)
    		// {
    			// cout<<dp[i][j]<<" ";
    		// }
    		// cout<<lc;
    	// }
    	
    	for(ll i=1;i<=n-k+1;i++)
    	{
    		for(ll j=1;j<=m-k+1;j++)
    		{
    			ll val=dp[i+k-1][j+k-1]+dp[i-1][j-1]-dp[i-1][j+k-1]-dp[i+k-1][j-1];
    			if(val==0 or val==k*k)
    			{
    				//cout<<val<<lc;
    				ans=min(ans,col[i][j]);
    			}
    		}
    	}
    	if(ans==z+1)
    	{
    		cout<<0<<lc;
    	}
    	else
    	{
    		cout<<ans<<lc;
    	}
    }
    return 0;
}
/*
	Well, why don't you just concentrate  
	on being the best you, you can be.
*/

```
