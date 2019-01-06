Today I'm starting writing my first Machine Learning lib called deeplearn
the biggest problem I am facing now is the way I writes is by creating simple class that's the only way I know to create it. So today at morning I took some refrence how these high level objects are being ceated and now I am starting writting deeplearn, but I'm now just testing how lib works

#Test1
Date: 6/1/2019
Time: 8:43 AM

I have created a object deeplearn and created an function print and it showed an error. Nothing worked as I expected
code: (function(){
  let deeplearn = {}
    deeplearn.print = () => {
      console.log('hello world')
    }
    }())
error: Uncaught ReferenceError: deeplearn is not defined
    at <anonymous>:1:7

#Test2
Date: 6/1/2019
Time: 8:48 AM
I did worked, what I did is created an object and put an function in it.
Code: let deeplearn = {}
      deeplearn.print = e
      function e(){
      console.log('okay')
      }

So, now I've got a basic idea that how lib works
Now lets begin building ML library

#Test3
Date: 6/1/2019
Time: 10:04 AM
I've created a function which loads the mobilenet model caller classifier which taked two arguments one is model naem but at this moment it only works for mobilenet model, Now the problem I'm facing is slow internet the model is of 16MB and every time i loads the page for testing new feature it loads from init and that takes too long to load over again and again now I need to wait for make work on this lib further after i will got to my hostel I will continue working on this library.
