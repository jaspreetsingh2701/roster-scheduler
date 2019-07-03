import React from 'react';

export class ParentTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28']
        }
    }

    calcDays = (e) => {
        let days;
        let counter = 1;
        if (!e) return this.state.days;
        days = [];
        if (e && e.target && e.target.value) {
            let value = e.target.value;
            for (counter; counter <= value; counter++) {
                days.push(counter < 10 ? "0" + counter : counter);
                // days.push(counter);
            }
        }
        this.setState({ days });
    }

    handleAccordion = event => {
        let acc = document.getElementsByClassName("accordion");
        let value = event && event.target && event.target.dataset && event.target.dataset.value | null;
        console.log("acc", acc);
        console.log("value", value);
        if (value) {
            let panel = acc[value].nextElementSibling;
            if (panel.style.display === 'table') panel.style.display = 'none';
            else panel.style.display = 'table';
        }
        // for (i = 0; i < acc.length; i++) {
        //     console.log('event',event.target.dataset.value);
        //     let panel = acc[i].nextElementSibling;
        //     if (panel.style.display === 'table') panel.style.display = 'none';
        //     else panel.style.display = 'table';
        //     // acc[i].addEventListener("click", function () {
        //     //     /* Toggle between adding and removing the "active" class,
        //     //     to highlight the button that controls the panel */
        //     //     this.classList.toggle("active");

        //     //     /* Toggle between hiding and showing the active panel */
        //     //     var panel = this.nextElementSibling;
        //     //     if (panel.style.display === "block") {
        //     //         panel.style.display = "none";
        //     //     } else {
        //     //         panel.style.display = "block";
        //     //     }
        //     // });
        // }
    }

    render() {
        const { days } = this.state;
        return (
            <div style={{ width: "100%" }}>
                <select onChange={this.calcDays}>
                    <option label="1 Week" value={7}></option>
                    <option label="2 Weeks" value={2 * 7}></option>
                    <option label="4 Weeks" value={4 * 7}></option>
                    <option label="5 Weeks" value={5 * 7}></option>
                    <option label="6 Weeks" value={6 * 7}></option>
                    <option label="9 Weeks" value={9 * 7}></option>
                </select>
                <Table days={days} handleAccordion={this.handleAccordion} />
            </div>
        );
    }
}

const Table = props => {
    const { days, handleAccordion } = props;
    return (
        <div style={{ width: "100%" }}>
            <table className="greyGridTable accordion">
                <tbody>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div style={{ backgroundColor: '#368EA7', color: 'white', padding: "2px 10px", boxSizing: 'border-box' }}>
                                Unfilled Duties<span style={{ marginLeft: 8, cursor: 'pointer' }} data-value={0} onClick={handleAccordion}>+</span>
                            </div>
                        </td>
                        {days.map((day, dayIdx) => <td style={{ boxSizing: 'border-box' }} key={dayIdx}>
                            <div>{day}</div>
                        </td>)}
                        <td style={{ width: 225, minWidth: 225, boxSizing: 'border-box' }}>
                            <div>Hours Grid</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="greyGridTable panel">
                <tbody>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div className="user-info-wrapper">
                                <div>cell1_1</div>
                                <div>Band 3</div>
                            </div>
                        </td>
                        {days.map((day, dayIdx) => <td style={{ boxSizing: 'border-box' }} key={dayIdx}>
                            <div style={{ height: 40, maxHeight: 40, maxWidth: 40, backgroundColor: '#2ECC71', color: 'white', margin: "5px auto" }}>{day}</div>
                        </td>)}
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div>--</div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div className="user-info-wrapper">
                                <div>cell1_2</div>
                                <div>Band 3</div>
                            </div>
                        </td>
                        {days.map((day, dayIdx) => <td valign="top" style={{ boxSizing: 'border-box' }} key={dayIdx}>
                            <div style={{ height: 40, maxHeight: 40, maxWidth: 40, backgroundColor: '#2ECC71', color: 'white', margin: "0 auto" }}>
                                {day}
                            </div>
                            {dayIdx % 3 === 0 && <div style={{ height: 40, maxHeight: 40, maxWidth: 40, backgroundColor: '#2ECC71', color: 'white', margin: "5px auto" }}>
                                {day}
                            </div>}
                        </td>)}
                        <td style={{ width: 225, minWidth: 225, boxSizing: 'border-box' }}>
                            <div>--</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table width="100%" className="greyGridTable accordion">
                {/* <col width={100} /><col width={100} /><col width={100} /><col width={100} /><col width={100} /> */}
                <tbody>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}></td>
                        {days.map((day, dayIdx) => <td style={{ boxSizing: 'border-box', background: 'transparent' }} key={dayIdx}></td>)}
                        <td style={{ width: 225, minWidth: 225 }}></td>
                    </tr>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div style={{ backgroundColor: '#368EA7', color: 'white', padding: "2px 10px", boxSizing: 'border-box' }}>
                                Orthopedics<span style={{ marginLeft: 8, cursor: 'pointer' }} data-value={1} onClick={handleAccordion}>+</span>
                            </div>
                        </td>
                        {days.length <= 28 && <td style={{ boxSizing: 'border-box', background: '#A29DBA', color: 'white' }} colSpan={28}>
                            <div>Approved</div>
                        </td>}
                        {days.length > 28 && (
                            <>
                                <td style={{ boxSizing: 'border-box', background: '#A29DBA', color: 'white' }} colSpan={days.length - 7}>
                                    <div>Approved</div>
                                </td>
                                <td style={{ boxSizing: 'border-box', background: '#A18FFF', color: 'white' }} colSpan={7}>
                                    <div>Unapproved</div>
                                </td>
                            </>)}
                        <td style={{ width: 225, minWidth: 225, boxSizing: 'border-box' }}>
                            <div>Hours Grid</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="greyGridTable panel">
                <tbody>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div className="user-info-wrapper">
                                <div>cell1_1</div>
                                <div>Band 3</div>
                            </div>
                        </td>
                        {days.map((day, dayIdx) => <td style={{ boxSizing: 'border-box' }} key={dayIdx}>
                            {/* <div className="blob green">{`cell${dayIdx + 1}_1`}</div> */}
                            <div style={{ height: 32, maxHeight: 40, maxWidth: 40, backgroundColor: (dayIdx === 3 || dayIdx === 6 || dayIdx === 10 || dayIdx === 16) ? '#30A43F' : '#2ECC71', color: 'white', margin: "5px auto" }}>{day}</div>
                        </td>)}
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div>--</div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: 225, minWidth: 225 }}>
                            <div className="user-info-wrapper">
                                <div>cell1_2</div>
                                <div>Band 3</div>
                            </div>
                        </td>
                        {days.map((day, dayIdx) => <td valign="top" style={{ boxSizing: 'border-box' }} key={dayIdx}>
                            <div style={{ height: 32, maxHeight: 40, maxWidth: 40, backgroundColor: '#2ECC71', color: 'white', margin: "0 auto" }}>
                                {day}
                            </div>
                            {dayIdx % 3 === 0 && <div style={{ height: 32, maxHeight: 40, maxWidth: 40, backgroundColor: (dayIdx === 3 || dayIdx === 6 || dayIdx === 10 || dayIdx === 16) ? '#F09D00' : '#2ECC71', color: 'white', margin: "5px auto" }}>
                                {day}
                            </div>}
                        </td>)}
                        <td style={{ width: 225, minWidth: 225, boxSizing: 'border-box' }}>
                            <div>--</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}