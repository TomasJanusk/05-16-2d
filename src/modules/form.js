const form = ()=>{
    return `<div class="form-group mb-2">
                <div class="error-message" style="color: red; display: none;">Neteisingai ivestas adresas</div>
                <input type="text" class="form-control term" placeholder="Jusu adresas:">
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control result" readonly>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Ieskoti kodo</button>
            `
}
export default form