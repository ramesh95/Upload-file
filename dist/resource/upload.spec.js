// import * as mocha from 'mocha';
// import * as chai from 'chai';
// import * as UUID from 'uuid'
// import { ImageEndpoints } from './upload'
// const expect = chai.expect;
// var mongoose = require('mongoose');
// let testModel: ImageEndpoints = new ImageEndpoints();
// describe('controller cases', function () {
//     before(async function () {
//         console.log("******BEGIN Tests*******");
//     });
//     after(async function () {
//         console.log("******END Tests*******");
//     });
//     it('Connect', function (done) {
//         this.timeout(0);
//         const uri = "mongodb+srv://dev:qwerty123@cluster0-6kkji.mongodb.net/test?retryWrites=true";
//         mongoose.connect(uri, { useNewUrlParser: true, }).then(async () => {
//             console.log("conected")
//             done();
//         }).catch((err: any) => {
//             console.log(err);
//             done(err);
//         });
//     });
//     it('add image', function (done) {
//         this.timeout(0);
//         let promise = testModel.addImage("mmmm", "yyyyyy")
//         promise.then((t) => {
//             console.log(t);
//             done();
//         })
//             .catch(err => {
//                 done(err);
//             });
//     });
// });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXNvdXJjZS91cGxvYWQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQiw0Q0FBNEM7QUFDNUMsOEJBQThCO0FBQzlCLHNDQUFzQztBQUV0Qyx3REFBd0Q7QUFDeEQsNkNBQTZDO0FBRTdDLGlDQUFpQztBQUNqQyxtREFBbUQ7QUFFbkQsVUFBVTtBQUVWLGdDQUFnQztBQUNoQyxpREFBaUQ7QUFDakQsVUFBVTtBQUVWLHNDQUFzQztBQUN0QywyQkFBMkI7QUFDM0Isc0dBQXNHO0FBQ3RHLCtFQUErRTtBQUMvRSxzQ0FBc0M7QUFDdEMsc0JBQXNCO0FBQ3RCLG1DQUFtQztBQUNuQyxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBRXpCLGNBQWM7QUFDZCxVQUFVO0FBR1Ysd0NBQXdDO0FBQ3hDLDJCQUEyQjtBQUMzQiw2REFBNkQ7QUFDN0QsZ0NBQWdDO0FBQ2hDLDhCQUE4QjtBQUU5QixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixNQUFNIiwiZmlsZSI6InJlc291cmNlL3VwbG9hZC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgbW9jaGEgZnJvbSAnbW9jaGEnO1xuLy8gaW1wb3J0ICogYXMgY2hhaSBmcm9tICdjaGFpJztcbi8vIGltcG9ydCAqIGFzIFVVSUQgZnJvbSAndXVpZCdcbi8vIGltcG9ydCB7IEltYWdlRW5kcG9pbnRzIH0gZnJvbSAnLi91cGxvYWQnXG4vLyBjb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcbi8vIHZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cbi8vIGxldCB0ZXN0TW9kZWw6IEltYWdlRW5kcG9pbnRzID0gbmV3IEltYWdlRW5kcG9pbnRzKCk7XG4vLyBkZXNjcmliZSgnY29udHJvbGxlciBjYXNlcycsIGZ1bmN0aW9uICgpIHtcblxuLy8gICAgIGJlZm9yZShhc3luYyBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqQkVHSU4gVGVzdHMqKioqKioqXCIpO1xuXG4vLyAgICAgfSk7XG5cbi8vICAgICBhZnRlcihhc3luYyBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqRU5EIFRlc3RzKioqKioqKlwiKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGl0KCdDb25uZWN0JywgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICAgICAgdGhpcy50aW1lb3V0KDApO1xuLy8gICAgICAgICBjb25zdCB1cmkgPSBcIm1vbmdvZGIrc3J2Oi8vZGV2OnF3ZXJ0eTEyM0BjbHVzdGVyMC02a2tqaS5tb25nb2RiLm5ldC90ZXN0P3JldHJ5V3JpdGVzPXRydWVcIjtcbi8vICAgICAgICAgbW9uZ29vc2UuY29ubmVjdCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB9KS50aGVuKGFzeW5jICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZWN0ZWRcIilcbi8vICAgICAgICAgICAgIGRvbmUoKTtcbi8vICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgICAgICAgICAgZG9uZShlcnIpO1xuXG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0pO1xuXG5cbi8vICAgICBpdCgnYWRkIGltYWdlJywgZnVuY3Rpb24gKGRvbmUpIHtcbi8vICAgICAgICAgdGhpcy50aW1lb3V0KDApO1xuLy8gICAgICAgICBsZXQgcHJvbWlzZSA9IHRlc3RNb2RlbC5hZGRJbWFnZShcIm1tbW1cIiwgXCJ5eXl5eXlcIilcbi8vICAgICAgICAgcHJvbWlzZS50aGVuKCh0KSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyh0KTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgZG9uZSgpO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4vLyAgICAgICAgICAgICAgICAgZG9uZShlcnIpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyB9KTtcbiJdfQ==
