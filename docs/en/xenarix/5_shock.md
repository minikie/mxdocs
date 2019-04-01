# 충격 시나리오

## 개요
설정된 변수에 충격을 준 시나리오를 생성함.

```python

shock2 = xen.VariableShock('shock2')
# shock_variable : target,
#shock2.add_shock_item(target_variable=irskrw, type='add', value=0.01)
shock2.add_shock_item(target_variable=irskrw, type='add', value=[0.01, 0.01])
#shock2.add_shock_item(target_variable=irskrw, type='mul', value=1.1)
#shock2.add_shock_item(target_variable=irskrw, type='custom', value=[0.01])

shock2.add_shock_item(target_variable=kospi2_imvol, type='add', value=0.05)

scen1.add_shock(shock2)

```
### 