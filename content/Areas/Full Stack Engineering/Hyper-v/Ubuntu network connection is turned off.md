Problem : 
- Ubuntu Hyper-V refused to connect to the internet despite the correct configuration. 



Ubuntu Screenshot
![[Pasted image 20260501152557.png]]


Hyper-V Network configuration.
![[Pasted image 20260501152638.png]]


Description :
- 

The Fix : 
### 1. The "Power Cycle" for Hyper-V Networking
Sometimes the internal NAT service just needs a kick.
- **Shut down** your Ubuntu VM.
- Open **PowerShell as Administrator** on your Windows host.
- Run these commands to restart the Host Network Service:
   PowerShell
```powershell
Restart-Service hns
```
- Start the VM and check if "Wired" connects automatically.

# Related




# Research


