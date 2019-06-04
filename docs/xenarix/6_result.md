# 결과

## 개요

생성된 시나리오를 조회하는 방법입니다.

## 저장소

생성된 시나리오가 저장되는 공간입니다. 시나리오 생성 전에 설정하여야 하며, 저장소 미 설정 시 하위 폴더에 repository 폴더가 생성됩니다. 그 외 경로는 아래와 같이 설정 가능합니다.

``` python
# 기본 저장소 : [your_working_directory]\repository
xen.set_repository('c:\repository')
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

## 결과 조회

생성된 시나리오의 결과는 아래와 같이 ResultObj를 생성한 후 조회할 수 있습니다.

```python
import xenarix.results as xen_r

res = xen_r.ResultObj('set1', 'scen_id1', 'result_id1')
```

## 구간

시나리오가 생성된 구간입니다. 설정된 기준일 부터 최종만기까지 구간이 결과 폴더의 TIMEGRIDINFO.TXT 파일에 저장되어있으며, 아래와 같이 조회할 수 있습니다. 

```python
timegrid = res.timegrid

for t in timegrid:
    print (t)  # Pandas(INDEX=16L, DATE='2015-09-18', T=0.043835616438356005, DT=0.0027397260273970005)

```

## 모델별 시나리오

준비중

## Multi-Path

준비중

## 충격시나리오 조회

준비중
