# Result

## Overview

생성된 시나리오를 조회하는 방법입니다.


## Repository

생성된 시나리오가 저장되는 공간입니다.

미설정 시 하위디렉토리에 repository 폴더가 생성됩니다.

```python
xen.set_repository('c:\\xenarix')
```

설정된 저장소에 아래와 같은 구조로 저장됩니다.

```
repository
├─ cali_input_file              # 모수 추정에 사용될 입력파일 폴더
│  ├─ cali_input1.txt           # 모수 추정에 사용될 입력파일
│  └─ cali_input2.txt    
│
├─ cali_results                 # 모수 추정된 결과
│
├─ scen_input_file              # 시나리오 생성에 사용될 입력파일 폴더
│  ├─ scen_input1.txt           # 시나리오 생성에 사용될 입력파일
│  └─ scen_input2.txt    
│
├─ scen_results                 # 시나리오 생성 결과 폴더
│  ├─ set1                      # 시나리오 세트 폴더
│  │  ├─ scen_id1               # 시나리오 ID 폴더
│  │  │  ├─ result_id1          # 시나리오 결과 ID 폴더
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
└─ settings              # 설정
```


### timegrid

### model path

### multi path

### shock 결과

조회
