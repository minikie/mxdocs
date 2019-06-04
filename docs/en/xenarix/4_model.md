# Underlying Model

## Overview

일반적으로 모델 더하는 방법이랑 , 제거하는 방법이랑 
model.name
model = xen_s.get_sample('')
scen.add_model()

여러개를 더하면 correlation 설정을 해야해. 
하는 방법은 요래

모델의 종류는 다음과 같은 리스트가 있어


|Type| Model     | Name                      | Factors | Remarks |
|----|-----------|---------------------------|---------|---------|
| IR | HW        | Hull-White                | 1       |         |
| IR | BK        | Black-Karasinski          | 2       |         |
| EQ | GBM       | Geometric Brownian Motion | 1       |         |
| EQ | GBM_CONST | GBM (Constant Parameter)  | 1       |         |
| FX | GK        | Garman–Kohlhagen          | 1       |         |




## InterestRate Model

### Hull White
: dr = a(theta - r) ...

## Equity Model


### GBM
이건 gbm이야 설명은 요렇고
수식은 이래

입력값은 요래
> gbm.x0 = 100

## Fx Model

### 