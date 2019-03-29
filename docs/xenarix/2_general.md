# general

## usage
일반적으로 general info를 설정해야대. 설정할수 있는 항목은 다음과 같아
예시를 보여줄게.

self.scenario_id = "TESTSCENID1"
self.reference_date = "20150902"
self.scenario_num = 30
self.delimiter = "SPACE"
self.maxyear = 30
self.n_peryear = 52
self.rnd_type = "SOBOL"
self.rnd_subtype = "SOBOL"
self.rnd_seed = 1
self.rnd_skip = 0
self.moment_match = False
self.frequency = TimeGridFrequency.Day
self.frequency_month = 1
self.frequency_day = 1
self.result_id = "TESTRESULTID1"
self.base_currency = "USD"
self.thread_num = 1


각각을 설정하는 방법은 요래 디테일은 밑에 참고해.


## simul num
이건 최소가 얼마고 요래


## reference_date
이거는 생성 기준일 형식은 yyyymmdd 요렇게 넣어야 해


## scenario_num
총 생성 되는 시나리오의 갯수야 최소는 20개이고  맥스는 100000이야 너무 많이 하지마.


## delimiter
이거는 무시해


## maxyear
이거는 생성될 시나리오의 최종 만기야. 최소값 얼마고 최대는 120년이야


## n_peryear
이거는 frequency랑 같이 사용해야하는데 custom인경우에 사용되


## rnd_type
이거는 사용할 랜넘넘버야 사용할수 있는건
요래 있어. 
sobol는 어떻고
messen는 어때


## rnd_subtype
이거는 그 밑에 적용하는 subtype이야
sobol의 경우에는 요래 있고
다른건 요래


## rnd_seed
이건 랜넘넘버 시드야 알아서 잘 설정


## rnd_skip
이거는 시드를 고정하고 랜덤을 건너뛰는 거야, 보통 다음과 같이 동작해
sobol은 이렇고
puedo는 요래


## moment_match
이거는 랜덤의 평균을 맞춰주는 거야


## frequency 
enum으로 되어있는데 사용할수 있는건 요래
각각은 요래
월말1일 : 주기적으로 요래


## frequency_month


## frequency_day