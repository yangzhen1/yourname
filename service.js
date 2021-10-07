app.set('port', (process.env.PORT || 80))
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
