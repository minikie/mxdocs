# Variable

## Overview

This is how you set the variables to use in your underlying model.
You also need to set a common variable to create a shock scenario.

Create and register value variables :
```python
kospi2_v = xen.ValueVariable('kospi2_v', 259)
scen1.add_variable(kospi2_v)
```

Create and register interest rate curve variables :
```python
irskrw = xen.YieldCurveVariable('irskrw')
irskrw.tenor = ['3M', '6M', '9M', '12M', '24M', '36M', '48M', '60M', '120M', '180M']
irskrw.value = [0.0164, 0.0161, 0.0159, 0.0164, 0.0173, 0.0182, 0.0191, 0.0218, 0.0229, 0.0229]
scen1.add_variable(irskrw)
```

Create and register variability curve variables :
```python
kospi2_imvol = xen.VolCurveVariable('kospi2_imvol')
kospi2_imvol.tenor = ['1Y', '2Y', '3Y', '4Y', '5Y']
kospi2_imvol.value = [0.3, 0.3, 0.3, 0.3, 0.3]
scen1.add_variable(kospi2_imvol)
```


Use created variable
```python
gbm1 = xen_s.gbm('kospi200')
gbm1.x0 = kospi2_v
gbm1.rf_curve = irskrw
gbm1.div_curve = 0.01
gbm1.sigma_curve = kospi2_imvol
```
