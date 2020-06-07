# 1. jsgauge hook function
在执行过程中会有相应的生命周期，在每一个生命周期会有不同的钩子函数
## 1.1 Suite
> 触发时机：执行开始以及执行结束时

```
gauge.hooks.beforeSuite(fn, [opts]) { ... }
gauge.hooks.afterSuite(fn, [opts]) { ... }
```

## 1.2 Spec
> 触发时机：执行spec文件
```
gauge.hooks.beforeSpec(fn, [opts]) { ... }
gauge.hooks.afterSpec(fn, [opts]) { ... } 
```

## 1.3 Scenario
> 触发时机：执行场景

```
gauge.hooks.beforeScenario(fn, [opts]) { ... }
gauge.hooks.afterScenario(fn, [opts]) { ... }
```

## 1.4 Step
> 触发时机：执行步骤时触发
```
gauge.hooks.beforeStep(fn, [opts]) { ... }
gauge.hooks.afterStep(fn, [opts]) { ... }
```
#2. Data Stores
在执行gauge时会有一些数据的存储，根据不同的生命周期会有不同的存储方式

##2.1 Scenario store
> 在每一个场景下的数据存储，当场景执行完成后删除
```
gauge.dataStore.scenarioStore.put(key, value);
gauge.dataStore.scenarioStore.get(key);
```
##2.2 Specification store
> 在每一个spec文件下数据存储，当前spec文件所有场景案例执行完成后删除
```
gauge.dataStore.specStore.put(key, value);
gauge.dataStore.specStore.get(key);
```
##2.3 Suite store
> 在每一次执行gauge时数据的存储,当完成gauge测试后删除
```
gauge.dataStore.suiteStore.put(key, value);
gauge.dataStore.suiteStore.get(key);
```