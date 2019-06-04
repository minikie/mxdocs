# Result

## Overview

How to view the generated scenario.


## Repository


This is the space where the generated scenario is saved. It should be set before creating the scenario. When the repository is not set up, a repository folder will be created in the subfolder. Other paths can be set as shown below.

```python
xen.set_repository('c:\\xenarix')
```

The following structure is stored in the configured repository.

```
repository
├─ cali_input_file              # Input file folder to be used for parameter estimation
│  ├─ cali_input1.txt           # Input file to be used for parameter estimation
│  └─ cali_input2.txt    
│
├─ cali_results                 # Estimated Parameter
│
├─ scen_input_file              # Input file folder to be used for scenario generation
│  ├─ scen_input1.txt           # Input file to be used for scenario generation
│  └─ scen_input2.txt    
│
├─ scen_results                 # Scenario creation result folder
│  ├─ set1                       
│  │  ├─ scen_id1                
│  │  │  ├─ result_id1           
│  │  │  │  ├─ 20150902_SCEN1_BASE.TXT   
│  │  │  │  ├─ 20150902_SCEN1_BASE_KOSPI200_VALUE.SCN  
│  │  │  │  ├─ 20150902_SCEN1_SHOCK2.TXT   
│  │  │  │  ├─ 20150902_SCEN1_SHOCK2_KOSPI200_VALUE.SCN  
│  │  │  │  ├─ INPUTINFO.TXT  
│  │  │  │  ├─ RESULTINFO.TXT  
│  │  │  │  └─ TIMEGRIDINFO.TXT  
│  │  │  │ 
│  │  │  └─ result_id2   
│  │  └─ scen_id2       
│  │     ├─ result_id1
│  │     └─ result_id2
│  └─ set2
│     └─ scen_id1
│        ├─ result_id1
│        └─ result_id2
│
└─ settings              
```


## Get Results

The result of the generated scenario can be retrieved after creating ResultObj as shown below.

```python
import xenarix.results as xen_r

res = xen_r.ResultObj('set1', 'scen_id1', 'result_id1')
```

## TimeGrid

The section where the scenario was created. The interval from the set base date to the final maturity is stored in the TIMEGRIDINFO.TXT file in the each result folder.

```python
timegrid = res.timegrid

for t in timegrid:
    print (t)  # Pandas(INDEX=16L, DATE='2015-09-18', T=0.043835616438356005, DT=0.0027397260273970005)

```