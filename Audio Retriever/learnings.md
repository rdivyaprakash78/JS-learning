# Getting audio input from Frontend and passing it to Backend.

## Checking if the browzer is compatible to accept media input

You can check if the browser supports media input in JavaScript by using the navigator.mediaDevices.getUserMedia method. Here's how you can do it:

```javascript
if (navigator.mediaDevices.getUserMedia) {

    // Browser supports media input

else {
    alert("Your browser does not support media")
}
```

## Checking if the input devices are not faulty

We can check whether the input devices are working properly using the `navigator.mediaDevices.getUserMedia()` method.

Here's the documentation link : [Link](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

Code example:

```javascript
if (navigator.mediaDevices.getUserMedia) {

    function setupSuccess(){
        // Input devices are working properly
    }

    function setupFailure(){
        // Input devices are not working properly
    }

    navigator.mediaDevices.getUserMedia({ audio:true }).then(setupSuccess, setupFailure)

else {
    alert("Your browser does not support media")
}
```

`navigator.mediaDevices.getUserMedia()` accepts a constraint object as a parameter. It specifies the types of media streams (audio and/or video) you want to access, along with any specific requirements or preferences for the media streams.

It is an object that can include the following properties:

```javascript
{
  audio: true | false | Object, // Requests audio input
  video: true | false | Object  // Requests video input
}
```

The function returns a `Promise` object. A Promise object accepts two methods as its arguments. Here in this case, it accepts `setupSuccess()` and `setupFailure()`

If the promise id fulfilled the first argument `setupSuccess()` will be executed else `setupFailure()` will be executed.

Here the promise is `navigator.mediaDevices.getuserMedia()`. That is, the promise will be fulfilled if the user's input devices(mike/camera) is compatible.

When the `navigator.mediaDevices.getUserMedia()` method is called and successfully resolves, it passes the MediaStream object to the function provided in the `.then()` block.

The stream is a MediaStream object that represents the video and/or audio stream captured from the user's input devices (e.g., camera, microphone).

## Object MediaRecorder

The MediaRecorder interface of the MediaStream Recording API provides functionality to easily record media. It is created using the `MediaRecorder()` constructor.

Documentation link : [Link](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

### `MediaRecorder()` Constructor:

Creates a new MediaRecorder object, given a MediaStream to record. Options are available to do things like set the container's MIME type (such as "video/webm" or "video/mp4") and the bit rates of the audio and video tracks or a single overall bit rate.

```javascript
const mediarecorder = new MediaRecorder(stream);
```

### Some important instance properties of MediaRecorder

**`MediaRecorder.state`**

Returns the current state of the MediaRecorder object (inactive, recording, or paused.)

### Some important instance methods of MediaRecorder

**`MediaRecorder.pause()`**

Pauses the recording of media.

**`MediaRecorder.resume()`**

Resumes recording of media after having been paused.

**`MediaRecorder.stop()`**

Stops recording, at which point a dataavailable event containing the final Blob of saved data is fired. No more recording occurs.

### Some important events methods of MediaRecorder

**`dataavailable`**

Fires periodically each time timeslice milliseconds of media have been recorded (or when the entire media has been recorded, if timeslice wasn't specified). The event, of type BlobEvent, contains the recorded media in its data property.

## Event Listeners

### 1. If event listener is a property of a class

```javascript
object.eventName = function (event) {
  // Your code here
};
```

**Explanation:**

`object:` The instance of the class or the element (e.g., MediaRecorder, HTMLElement).

`eventName:` The name of the event, prefixed with on (e.g., ondataavailable, onstop).

`event:` The event object automatically passed to the handler function.

**Example**

```javascript
mediaRecorder.ondataavailable = function (event) {
  console.log("Data received:", event.data);
};
```

### 2. Event listener for an element in a DOM

Here's the generic syntax

```javascript
element.addEventListener("eventName", function (event) {
  // Your code here
});
```

Example:

```javascript
button.addEventListener("click", function (event) {
  console.log("Button clicked!", event);
});
```

### 3. Defining event listener using Event Handler property

```javascript
element.eventName = function (event) {
  // Your code here
};
```

Example

```javascript
const button = document.querySelector("#myButton");

// Assign a click event listener
button.onclick = function (event) {
  console.log("Button clicked!", event);
};
```

## BLOB

In JavaScript, a Blob (Binary Large Object) is an object used to represent raw binary data. It can be thought of as a file-like object of immutable, raw data. Blobs are commonly used for handling file uploads or dealing with data that isn’t necessarily in a specific format (like text or JSON) but is rather just a sequence of bytes.

### Creating a Blob

You can create a Blob using the `Blob()` constructor. This constructor accepts an array of data (usually in the form of strings or typed arrays) and options for the MIME type.

```javascript
const blob = new Blob([data], { type: "image/png" });
```

`data:` An array or array-like object containing the data to be represented as a Blob (e.g., a string, Uint8Array, etc.).

`type:` (optional) Specifies the MIME type of the data (e.g., 'image/png', 'audio/mp3').

Example:

```javascript
const text = "Hello, this is a text stored in a Blob.";
const blob = new Blob([text], { type: "text/plain" });
```

Audio files are stored in Blobs before they are sent to the backend server.

## Form Data

The FormData object in JavaScript is a built-in object used to represent form data as key-value pairs. It allows you to easily gather and submit data from HTML forms, especially for asynchronous submissions using AJAX or fetch. The FormData object is ideal for handling file uploads as well as regular form data.
