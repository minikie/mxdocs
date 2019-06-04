# Scenario Info

## Overview

The options used when creating the scenario are:

| Item         | Variable Name     |       Example |
|:------------|----------------|----------------:|
| Scenario ID    | scenario_id     |   "TESTSCENID1" |
| Result ID      | result_id       | "TESTRESULTID1" |
| ReferenceDate        | reference_date  |      "20150902" |
| ScenarioNum | scenario_num    |              30 |
| Delimiter        | delimiter       |         "SPACE" |
| MaxYear       | maxyear         |              30 |
| RandomType      | rnd_type        |         "SOBOL" |
| RandomSubtype   | rnd_subtype     |         "SOBOL" |
| RandomSeed  | rnd_seed        |               1 |
| RandomSkip  | rnd_skip        |               0 |
| MomentMatching   | moment_match    |           False |
| Frequency      | frequency       |       "monthly" |
| FrequencyMonth   | frequency_month |              10 |
| FrequencyDay   | frequency_day   |              11 |
| NPerYear  | n_peryear       |              52 |
| BaseCurrency       | base_currency   |           "USD" |
| UseCPU Num  | thread_num      |               1 |



## Scenario Num

This is the number of scenarios to be created. You usually use 200, 500, or 1,000 units. and it's minimum is 20 to 100,000.

```python
sen1.general.scenario_num = 1000  # default = 30
```


## Referenc eDate
The reference date of the scenario, which is the date corresponding to the start date. The base date format must be in the form yyyymmdd.

```python
sen1.general.reference_date = '20181011' # default = 20150902
```


## Delimiter
The separator text to be used when generating the scenario result file.
Not used in Python Version.

```python
sen1.general.delimiter = '|'  # default = 'SPACE'
```


## MaxYear

The scenario will be created up to the base date + (final maturity) year.
The minimum value is 1 year, and the maximum is 120 years.

```python
sen1.general.maxyear = 10   # default = 30
```


## NPerYear
When the interval is set to 'custom', this is the number of intervals per year. When the interval is created as a decimal point, it is mapped to a date corresponding to the nearest integer part.

```python
sen1.general.n_peryear = 52   # default = 30
```

## Random Type
Sets the random number to use. Sobl, Crude can be used.

```python
sen1.general.rnd_type = 'sobol'   # default = 'sobol'
```

## Random Subtype
Sets the detail type of the selected random type. You can make detailed settings as below.

* Sobol : ...
* Crude : 메르센, ...

```python
sen1.general.rnd_subtype = 'jackel'   # default = 'jackel'
```


## Random Seed
This is the initial value(seed) used when generating a random number. When the initial values ​​are fixed, a random number is generated in the same order.

```python
sen1.general.rnd_seed = 0      # default = 1
```


## Random Seed
This is a random number after skipping the set number of times based on the scenario.

예시) 10 -> 10번의 시나리오를 건너뜀 
```python
sen1.general.rnd_skip = 10      # default = 0
```


## Moment Matching
Adjust posteriorly so that the theoretical(population) mean of each model is equal to the calculated(sample) mean of the generated scenarios.

```python
sen1.general.moment_match = True      # default = False
```


## Frequency
Sets the interval of the interval. The frequency used is as follows.
You must set the month or day you want to set as the year or month.

* monthly
* everyfourmonth
 
```python
sen1.general.frequency = 'monthly'      # default = 'monthly'
```


## Frequency Month
Used when the interval period is set to years. This is the fixed month of the month.

```python
sen1.general.frequency_monthly = 2      # default = 1
```


## Frequency Day
Used when the interval period is set to year or month. This is a fixedly generated interval.

```python
sen1.general.frequency_day = 1      # default = 1
```
