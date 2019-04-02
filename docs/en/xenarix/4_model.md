# Underlying Model

## Overview

일반적으로 모델 더하는 방법이랑 , 제거하는 방법이랑 
model.name
model = xen_s.get_sample('')
scen.add_model()

여러개를 더하면 correlation 설정을 해야해. 
하는 방법은 요래

모델의 종류는 다음과 같은 리스트가 있어


| 항목 | 모델        | 수식                     | 요인수 | 비고 |
|----|-----------|------------------------|-----|----|
| IR | [HW](#HullWhite)        | dr=a(theta-r)*dt + ... | 1   |    |
| IR | BK        | dr=a(theta-r)*dt + ... | 2   |    |
| EQ | GBM       | dS=mu*dt + ...         | 1   |    |
| EQ | GBM_CONST | dS=mu*dt + ...         | 1   |    |
| FX | GK        |                        |     |    |




## InterestRate Model

### Hull White
이건 hw 가 만든 이자율 모델이야. 어쩌구 
수식은 이래
: dr = a(theta - r) ...

입력값은 요래

모델 만드는 방법은 요래
fittingcurve



## Equity Model


### GBM
이건 gbm이야 설명은 요렇고
수식은 이래

입력값은 요래
> gbm.x0 = 100

## Fx Model

### 