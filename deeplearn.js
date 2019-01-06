let deeplearn = {}
deeplearn.classifier = (model, onmodelLoaded)=>{
  let m
  if(model == 'mobilenet'){
    mobilenet.load().then(md=> {
      m = md
      onmodelLoaded()
      return m
    })
  }
}
