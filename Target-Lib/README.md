Targetlib is a Library for generating network ranges, random IPs and randomizing iplists.

## How to use it

```
import targetlib
tl = targetlib.targetlib()
#from here call the methods wanted
```

## Generate one random IP

```
#generate one random ip
tl._generate_ip()
'80.185.139.160'
```

## Generate more random IPs

```
#generate counts of random IPs
tl.generate_random_ip(100)
print tl.tgt_q.qsize()
100
#getting one element
tl.tgt_q.get()
'163.146.106.96'
```

## Generate Target Range

If you want to get a Queue of all IPs in the range of, lets say 192.168.1.0-192.168.1.255 you can use this method.

```
#generate range
tl.generate_target_range('192.168.1.0','192.168.1.255')

#or for more ;)
tl.generate_target_range('10.0.0.0','11.0.0.0')
```

As a result you get a Queue with the generated elements.
