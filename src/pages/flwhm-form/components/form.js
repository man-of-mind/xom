import { useForm } from '@mantine/form'
import { Stepper, TextInput, Group, Button, Textarea, Code } from '@mantine/core'
import { useState } from 'react'
import * as XLSX from 'xlsx'

// const XLSX =  require('xlsx');

const Form = () => {
    const [active, setActive] = useState(0)

    const form = useForm({
        initialValues: {
            title: "",
            swabValve0: "",
            swabValue5: "",
            swabValue10: "",
            manualValve0: "",
            manualValve5: "",
            manualValve10: "",
            actuatedValve0: "",
            actuatedValve5: "",
            actuatedValve10: "",
            upperMasterValve0: "",
            upperMasterValve5: "",
            upperMasterValve10: "",
            lowerMasterValve0: "",
            lowerMasterValve5: "",
            lowerMasterValve10: "",
            sitp: "",
            pcp: "",
            icp: "",
            scp: "",
            mp: "",
            hydraulicReturn: "",
            umvClosingTime: "",
            wssvClosingTime: "",
            scssv0: "",
            scssv5: "",
            scssv10: "",
            scssv20: "",
            scssv30: "",
            scssv40: "",
            scssv50: "",
            scssv60: "",
            comments: ""
        },
        validate: (values) => {
            if (active === 0) {
                return {
                    title: values.title.trim().length < 6 ? 'Title must include at least 6 characters' : null,
                }
            }
            return {}
        }
    })

    const inputStyle = {
        label: {
            fontWeight: 650,
            paddingTop: 10,
            paddingBottom: 6,
            fontSize: 16
        }
    }

    const nextStep = () => setActive((current) => {
        window.scrollTo(0,0);
        if (form.validate().hasErrors) {
            return current;
        }
        return current < 3 ? current + 1 : current;
    })

    const prevStep = () => {
        window.scrollTo(0,0);
        setActive((current) => (current > 0 ? current - 1 : current));
    }

    const readFile = () => {
        // const reader = new FileReader();
        // reader.readAsDataURL("https://mysite.na.xom.com/personal/upstreamaccts_aganiyu/Documents/WIMS%20Compliance%20Report%20Mar%2017%2C%202023.xlsx");
        // reader.onloadend = function() {
        //     console.log(reader.result)
        // }

        // const request = new XMLHttpRequest();
        // request.open("GET", "https://mysite.na.xom.com/personal/upstreamaccts_aganiyu/Documents/WIMS%20Compliance%20Report%20Mar%2017%2C%202023.xlsx", true);
        // request.setRequestHeader('Access-Control-Allow-Origin', "http://localhost:3000");
        // request.send(null);
        // console.log(request.response)
    
//        const url = "https://mysite.na.xom.com/personal/upstreamaccts_aganiyu/_layouts/15/WopiFrame.aspx?sourcedoc={eb3977a9-9c5d-4818-befd-a673bf45a07e}&action=edit&source=https%3A%2F%2Fmysite%2Ena%2Exom%2Ecom%2Fpersonal%2Fupstreamaccts%5Faganiyu%2FDocuments%2FForms%2FAll%2Easpx";
        const url = "https://onedrive.com/edit.aspx?resid=4D4BC46A912E5F26!153779&cid=4d4bc46a912e5f26&CT=1683621530209&OR=ItemsView";
        fetch(url).then(res => res.arrayBuffer()).then(buffer => {
            const workbook = XLSX.read(buffer, { type: 'array' });
            const sheetName = workbook.SheetName[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            console.log(data)
        }).catch(err => console.log(err))
    }

    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className='pb-4 font-medium'>FLWHM Field Report Data Form</h1>
            <>
                <Stepper active={active} breakpoint="md">
                    <Stepper.Step label="First Step" description="Swab and manual wing valves values">
                        <TextInput
                            label="Title"
                            withAsterisk
                            placeholder='Well name, tree type and size'
                            {...form.getInputProps('title')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SITP"
                            placeholder="Enter the SITP"
                            {...form.getInputProps('sitp')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="PCP"
                            placeholder="Enter the PCP"
                            {...form.getInputProps('pcp')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="ICP"
                            placeholder="Enter the ICP"
                            {...form.getInputProps('icp')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCP"
                            placeholder="Enter the SCP"
                            {...form.getInputProps('scp')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Swab Valve(psi) in 0min"
                            placeholder='Enter only the SV pressure value'
                            {...form.getInputProps('swabValve0')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Swab Valve(psi) in 5mins"
                            placeholder='Enter only the SV pressure value'
                            {...form.getInputProps('swabValve5')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Swab Valve(psi) in 10mins"
                            placeholder='Enter only the SV pressure value'
                            {...form.getInputProps('swabValve10')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Manual Wing Valve(psi) in 0min"
                            placeholder='Enter only the MWV pressure value'
                            {...form.getInputProps('manualValve0')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Manual Wing Valve(psi) in 5mins"
                            placeholder='Enter only the MWV pressure value'
                            {...form.getInputProps('manualValve5')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Manual Wing Valve(psi) in 10mins"
                            placeholder='Enter only the MWV pressure value'
                            {...form.getInputProps('manualValve10')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                    </Stepper.Step>

                    <Stepper.Step label="Second Step" description="Actuated Wing, upper and lower master valves values">
                        <TextInput
                            label="Actuated Wing Valve(psi) in 0min"
                            placeholder='Enter only the WSSV pressure value'
                            {...form.getInputProps('actuatedValve0')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Actuated Wing Valve(psi) in 5mins"
                            placeholder='Enter only the WSSV pressure value'
                            {...form.getInputProps('actuatedValve5')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Actuated Wing Valve(psi) in 10min"
                            placeholder='Enter only the WSSV pressure value'
                            {...form.getInputProps('actuatedValve10')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Upper Master Valve(psi) in 0min"
                            placeholder='Enter only the UMSSV pressure value'
                            {...form.getInputProps('upperMasterValve0')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Upper Master Valve(psi) in 5mins"
                            placeholder='Enter only the UMSSV pressure value'
                            {...form.getInputProps('upperMasterValve5')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Upper Master Valve(psi) in 10mins"
                            placeholder='Enter only the UMSSV pressure value'
                            {...form.getInputProps('upperMasterValve10')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Lower Master Valve(psi) in 0min"
                            placeholder='Enter only the LMV pressure value'
                            {...form.getInputProps('lowerMasterValve0')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Lower Master Valve(psi) in 5mins"
                            placeholder='Enter only the LMV pressure value'
                            {...form.getInputProps('lowerMasterValve5')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Lower Master Valve(psi) in 10mins"
                            placeholder='Enter only the LMV pressure value'
                            {...form.getInputProps('lowerMasterValve10')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="Hydraulic Return"
                            placeholder="Enter the hydraulic return vol"
                            {...form.getInputProps('hydraulicReturn')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="UMSSV Closing Time"
                            placeholder="Enter the UMSSV closing time"
                            {...form.getInputProps('umvClosingTime')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="WSSV Closing Time"
                            placeholder="Enter the WSSV closing time"
                            {...form.getInputProps('wssvClosingTime')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="MP"
                            placeholder="Enter the MP"
                            {...form.getInputProps('mp')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                    </Stepper.Step>

                    <Stepper.Step label="Last Step" description="SCSSV values and comment">
                        <TextInput
                            label="SCSSV(psi) in 0min"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv0')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 5mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv5')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 10mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv10')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 20mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv20')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 30mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv30')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 40mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv40')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 50mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv50')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <TextInput
                            label="SCSSV(psi) in 60mins"
                            placeholder='Enter only the SCSSV value'
                            {...form.getInputProps('scssv60')}
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                        <Textarea
                            placeholder="Enter your comment"
                            label="Comment"
                            minRows={4}
                            {...form.getInputProps('comments')}
                            autosize
                            size="lg"
                            radius={"md"}
                            styles={() => (inputStyle)}
                            className="max-w-[750px]"
                        />
                    </Stepper.Step>

                    <Stepper.Completed>
                        <span className='italic font-bold'>Confirm and take a snippet before submitting!!!</span>
                        {/* <Code block mt="xl">
                            {JSON.stringify(form.values, null, 2)}
                        </Code> */}
                        <div className='grid grid-cols-9 grid-rows-10 gap-0 font-medium max-w-[1100px] border-rounded border w-fit border-[#000] mt-3 text-center'>
                            <div className='col-span-9 p-1.5 bg-blue-600 text-[#fff] text-start'>{form.values.title}</div>
                            <div className='border border-t-0 border-l-0 border-[#000] pt-3'>Time</div>
                            <div className='border border-t-0 border-l-0 border-[#000] pt-3'>SV</div>
                            <div className=' border border-t-0 border-l-0 border-[#000] py-1.5 px-2'>Manual Wing Valve</div>
                            <div className=' border border-t-0 border-l-0 border-[#000] py-1.5'>Actuated Wing valve</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>Upper Master Valve</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>Lower Master Valve</div>
                            <div className='font-medium border border-t-0 border-l-0 border-[#000] py-1.5'>SCSSV</div>
                            <div className='font-medium col-span-2 border border-t-0 border-x-0 border-[#000] py-1.5'>Comment</div>
                            {/* * Row for 0min data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>0</div>
                            <div className='border border-b-1 border-t-0 border-l-0 border-[#000] py-1.5'>0psi</div>
                            <div className='py-1.5 border border-t-0 border-l-0 border-[#000] py-1.5 '>2700psi</div>
                            <div className='py-1.5 border border-t-0 border-l-0 border-[#000] py-1.5'>2200psi</div>
                            <div className='py-1.5 border border-t-0 border-l-0 border-[#000] py-1.5'>600psi</div>
                            <div className='py-1.5 border border-t-0 border-l-0 border-[#000] py-1.5'>500psi</div>
                            <div className='py-1.5 border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            <div className='row-span-6 col-span-2 px-1'>{form.values.comments}</div>
                            {/* * Row for 5mins data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>5</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>0psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>2700psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1600psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>600psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>500psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            {/* * Row for 10mins data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>10</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>0psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>2700psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1500psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>600psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>500psi</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            {/* * Row for 20mins data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>30</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5 text-end pr-2'>SITP</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>3450psi</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'>MP</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1450psi</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'></div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            {/* * Row for 30mins data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>30</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5 text-end pr-2'>PCP</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>0psi</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'>Hydaulic Return</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>200ml</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'></div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            {/* * Row for 40mins data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>40</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5 text-end pr-2'>ICP</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'></div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'>UM-SSV Closing Time</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>56secs</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'></div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            {/* * Row for 50mins data -- start * */}
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>50</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5 text-end pr-2'>SCP</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>0psi</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'>W-SSV Closing Time</div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>180secs</div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'></div>
                            <div className='border border-t-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                            <div className='col-span-2'></div>
                            {/* * Row for 60mins data -- start * */}
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'>60</div>
                            <div className='col-span-5 border border-y-0 border-l-0 border-[#000] py-1.5 text-end pr-2'></div>
                            <div className='border border-y-0 border-l-0 border-[#000] py-1.5'>1900psi</div>
                        </div>

                    </Stepper.Completed>
                </Stepper>
                <Group className='lg:mr-40' mt="xl">
                    {active !== 0 && (
                        <Button
                            onClick={prevStep}
                            className='text-whitw bg-blue-500'
                        >
                            Back
                        </Button>
                    )}
                    {active !== 3 && <Button className='text-white bg-blue-500' onClick={nextStep}>Next step</Button>}
                    {active === 3 && <Button className='text-white bg-blue-500' onClick={() => {console.log(form.values); readFile()}}>Submit</Button>}
                </Group>
            </>
        </div>
    )
}

export default Form;