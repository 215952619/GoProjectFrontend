import md5 from 'js-md5'

class Loading {
    loading = []
    baseConfig = {
        beforeAppend(loading, config) {
            console.log('before append ' + config.name)
            if (!config.name) {
                config.name = md5(JSON.stringify(this.config))
            }
        },
        afterAppend(loading, config) {
            console.log('after append ' + config.name)
        },
        beforeDelete(loading, config) {
            console.log('before delete ' + config.name)
        },
        afterDelete(loading, config) {
            console.log('after delete ' + config.name)
        },
    }
    append() {
        let name = this.config.name
        this.list[name] = { ...this.config }
    }
    delete(name) {
        if (!Object.prototype.hasOwnProperty.call(this.list, name)) {
            return
        }
        beforeDelete(this, this.list[name].config)
        delete this.list[name]
        afterDelete(this, this.list[name].config)
    }
    anyLoading() {
        return Object.values(this.list).some(config => config.show)
    }
    isLoadingByName(name) {
        return this.list[name]?.show ?? false
    }
}

const globalLoading = new Loading()

export default globalLoading
