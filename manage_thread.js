const Hidemyacc = require('./hidemyacc')

async function manageThread() {
    const hidemyacc = new Hidemyacc();
    const response = await hidemyacc.profiles()
    const profiles = response.data

    let index = 0;
    setInterval(function() {
        if (index < profiles.length) {
            const profile = profiles[index];
            hidemyacc.start(profile.id)
            index++;
        }
    }, 1000);
}

manageThread()