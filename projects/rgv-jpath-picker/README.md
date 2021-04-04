# RgvJpathPicker

This library was build to get Jpath from json data using a click on node.

## Usage
Import the RgvJpathPickerModule in app.module.ts
```typescript
import { RgvJpathPickerModule } from 'rgv-jpath-picker';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    RgvJpathPickerModule,
    ...
  ],
  providers: [],
  bootstrap: [...]
})
...
```
Add the following code to html file.
```html
<rgv-jpath-picker (jPath)="getJpath($event)" [json]="jsonData" [jsonPath]="'$'"><rgv-jpath-picker>
```
Here, `jsonData` is a typescript variable which consist json value. We will get Jpath value in `jPath` variable.
We need to declare a method in typescript file.
```typescript
getJpath(jPath) {
    //Here you can access jPath
    console.log(jPath);
}
```