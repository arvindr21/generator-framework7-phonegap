# <%= _.camelize(appname) %>

> A sample Apache Cordova application integrated with Framework7.

## App Dev
Like you would any corodova app

## Run in browser
First add the browser platform, if not already done so

```bash
$ cordova platform ls
$ cordova platform add browser
```
Run the app in browser
```bash
$ cordova run browser -- --port=8001
```

## Framework7 Customization
If you would like to customize Framework7, you can do so inside the `/framework7` folder. Once the development is completed and you have build the final distrubtion from inside the `/framework7` folder, you need to copy the contents of `/framework7/dist` folder to `www/lib`. _Contents not the completed folder._