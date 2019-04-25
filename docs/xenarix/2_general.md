# 시나리오 기본정보

## 개요

시나리오를 생성 할 때 사용되는 옵션은 다음과 같습니다.

| 항목         | 변수명             |              예시 |
|:------------|----------------|----------------:|
| 시나리오 ID    | scenario_id     |   "TESTSCENID1" |
| 결과 ID      | result_id       | "TESTRESULTID1" |
| 기준일        | reference_date  |      "20150902" |
| 시나리오 생성 개수 | scenario_num    |              30 |
| 구분자        | delimiter       |         "SPACE" |
| 최종만기       | maxyear         |              30 |
| 난수 종류      | rnd_type        |         "SOBOL" |
| 난수 세부 종류   | rnd_subtype     |         "SOBOL" |
| 난수 생성 초기값  | rnd_seed        |               1 |
| 난수 건너뜀 횟수  | rnd_skip        |               0 |
| 적률일치법 사용   | moment_match    |           False |
| 구간 주기      | frequency       |       "monthly" |
| 구간(월 고정)   | frequency_month |              10 |
| 구간(일 고정)   | frequency_day   |              11 |
| 구간 개수(연간)  | n_peryear       |              52 |
| 기준통화       | base_currency   |           "USD" |
| CPU 사용 개수  | thread_num      |               1 |



시나리오 


각각을 설정하는 방법은 요래 디테일은 밑에 참고해.


## 시나리오 생성 개수

생성할 시나리오의 개수를 설정하는 항목입니다. 보통 200, 500, 1,000개를 이용합니다. 최소 20개 부터 100,000까지 설정할 수 있습니다.

```python
sen1.general.scenario_num = 1000  # default = 30
```


## 기준일
시나리오의 생성 기준일이며, 시작 값에 해당하는 날짜 입니다. 기준일 형식은 yyyymmdd 형태로 넣어야합니다.

```python
sen1.general.reference_date = '20181011' # default = 20150902
```


## 구분자
시나리오 결과 파일을 생성할 시에 사용될 구분자 text입니다.
Python Version에서는 사용되지 않습니다. 

```python
sen1.general.delimiter = '|'  # default = 'SPACE'
```


## 최종 만기
기준일 + (최종 만기)년 까지 시나리오가 생성이 되며, 연단위로 설정합니다. 
최소은값 1년이고, 최대는 120년입니다.

```python
sen1.general.maxyear = 10   # default = 30
```


## 구간 개수(연간)
구간 주기가 'custom'으로 설정이 되었을 때에 연간 구간 개수이며, 구간이 소수점으로 생성될 때 가까운 정수부분에 해당하는 일자로 매핑됩니다.

```python
sen1.general.n_peryear = 52   # default = 30
```

## 난수 종류
사용할 난수를 설정합니다. Sobl , Crude를 사용할 수 있습니다.

```python
sen1.general.rnd_type = 'sobol'   # default = 'sobol'
```

## 난수 세부 종류
선택된 난수의 세부 종류를 설정합니다. 각각 마다 아래와 같이 세부설정을 할 수 있습니다.
* Sobol : ...
* Crude : 메르센, ...

```python
sen1.general.rnd_subtype = 'jackel'   # default = 'jackel'
```


## 난수 생성 초기값
난수를 생성할 때 사용되는 초기값입니다. 초기값이 고정되면, 같은 순서로 난수가 생성됩니다.

```python
sen1.general.rnd_seed = 0      # default = 1
```


## 난수 건너뜀 횟수
난수를 생성할 때 설정된 횟수를 시나리오 기준으로 건너뛴 후 생성합니다. 

예시) 10 -> 10번의 시나리오를 건너뜀 
```python
sen1.general.rnd_skip = 10      # default = 0
```


## 적률일치법 사용
각 모델의 이론 평균과 생성된 시나리오의 산출 평균값이 일치하도록 사후 조정합니다.

```python
sen1.general.moment_match = True      # default = False
```


## 구간 주기
구간의 주기를 설정합니다. 사용되는 주기는 아래와 같습니다.
년 또는 월로 설정할 시 고정하는 월 또는 일을 설정해야 합니다.

* monthly : 매월
* everyfourmonth : 4개월
 
```python
sen1.general.frequency = 'monthly'      # default = 'monthly'
```


## 구간(월 고정)
구간주기가 년으로 설정되었을 때 사용됩니다. 고정적으로 생성되는 구간 월입니다.

```python
sen1.general.frequency_monthly = 2      # default = 1
```


## 구간(일 고정)
구간주기가 년 또는 월으로 설정되었을 때 사용됩니다. 고정적으로 생성되는 구간 일입니다.

```python
sen1.general.frequency_day = 1      # default = 1
```
