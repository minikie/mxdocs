# Quick Start

## Install and Generation

To install Xenarix, simply use pip :

``` {.sourceCode .bash}
$ pip install xenarix
```

Import Xenarix Library :
```python
import xenarix as xen
import xenarix.sample as xen_s
```

Make new scenario set and scenario:

```python
scenSet = xen.ScenarioSet(set_name='set1')
```

Make scenario and Add Model to scenario:

```python
scen1 = xen.Scenario(scen_id='scen_id1', result_id='result_id1')

scen1.add_model(xen_s.gbm('kospi200'))
scen1.add_model(xen_s.hw1f('irskrw'))
```

Add scenario to scenario set and Generate it:

```python
scenSet.add_scenario(scen1)
scenSet.generate()
```

### 2. Get Scenario Results

We have two methods for checking result data.

* Python result loader

Create ResultObj :

```python
import xenarix.results as xen_r

res = xen_r.ResultObj('set1', 'scen_id1', 'result_id1') 
```

Time 't' iterating in TimeGrid :

```python
for t in res.timegrid:
    print (t)  # Pandas(INDEX=16L, DATE='2015-09-18', T=0.043835616438356005, DT=0.0027397260273970005)
```

Get Multipath of specific scenario count :

```python
multipath = res.get_multipath(scen_count=1)
print (multipath)  # pandas table shape(t_count, model_count)
```

Get Modelpath of specific model :
```python
modelpath = res.get_modelpath(model_count=1)
print (modelpath)  # ndarray : shape(scenarioNum, t_count)
```

---------------------------------------

* ResultViewer for Windows

![ScreenShot](/images/resultviewer.png)

You can download [ResultViewer](https://github.com/minikie/xenarix/releases/latest) 

Download ResultViewer.Zip and Run Setup.exe 

