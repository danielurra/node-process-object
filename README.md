![Node js_logo_650x390px](https://github.com/danielurra/node-process-object/assets/51704179/3c4a7e29-7ad6-4b0a-b4d9-dc25508bd38f)

# Node.js Process object
There are two ways to **stop** a running process:
* Manual stop by using `Ctrl + C`
* By using the `exit function` of the Node **process object**

# Visualize a running process
```javascript
for(let x=0; x<50000; x++){
    console.log(x);
    }
```
![running-process](https://github.com/danielurra/node-process-object/assets/51704179/d1daeab4-1e82-4065-a1f4-0ec3d803fd07)

## Run your code
Type the following command and press enter:<br>
```javascript
node ./test.js
```
![node-running-process-animated](https://github.com/danielurra/node-process-object/assets/51704179/1a30c5fa-4a63-40ec-8f7b-0e0ba3c873b7)

# Manually stop, Ctrl + C
Execute your code and press Ctrl + C to manually stop it.<br>
![manual-stop](https://github.com/danielurra/node-process-object/assets/51704179/96dfcdbe-a443-4d53-bfd6-0cacdd54cbf1)

# Stopping the process by using the exit function
```javascript
for(let x=0; x<50000; x++){
    console.log(x);
    if(x==25000){
        process.exit();
    }
}
```
![exit-function](https://github.com/danielurra/node-process-object/assets/51704179/79116dc0-a381-4c64-a2d2-013fb960a833)

# Visualize the process objects, its properties and methods
```javascript
console.log(process);
for(let x=0; x<1; x++){
    console.log(x);
    if(x==25000){
        process.exit();
    }
}
```
![process-object](https://github.com/danielurra/node-process-object/assets/51704179/839a59ff-2433-4095-abdd-c71c80d4472e)

## Exit Function of the process object
![process-object-exit-function](https://github.com/danielurra/node-process-object/assets/51704179/9afce6c1-92c3-4ffd-ad80-c579824ed564)

## More about the process object
![more-about-process-obj](https://github.com/danielurra/node-process-object/assets/51704179/4b95790c-49c7-457c-b574-743dee5c6e09)

