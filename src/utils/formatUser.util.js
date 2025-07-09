function formatSocialUser(profile){
    const user={
        name: profile.displayName,
        provider: profile.provider,
        email: profile._json.email,
        userID: profile.id,
    };
    return user;
}

module.exports={
    formatSocialUser,
}
