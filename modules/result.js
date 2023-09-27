function construct(result) {
    const resultObject = {
        date: new Date(result.date),
        memberId: result.memberId,
        discipline: result.discipline,
        type_: result.resultType,
        time: result.time,
        set MemberName(memberObject) {
            this.memberId = memberObject.name;
        },
        get MemberName() {
            return this.memberId;
        },
        get type() {
            if (this.type_ === "competition") {
                return true
            } else return false;
        }
    }
    return resultObject;
}

export { construct };